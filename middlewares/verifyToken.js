const jwt = require("jsonwebtoken");
require('dotenv').config();
const User = require('../model/user');

module.exports.verifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
      if (!token) {
          return res.status(403).send("A token is required for authentication");
      }
      try {
          const decoded = jwt.verify(token, process.env.TOKEN_KEY);
          const findUser = await User.find({"email":decoded.email});
          if (findUser[0].role === 'user'){
              return next();
          }
          else {
              res.status(400).send({"msg":"Request Not Allowed"})
          }
      }catch (err) {
          return res.status(401).send("Invalid Token");
      }
  };
