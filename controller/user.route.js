const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports.register = async (req, res) => {
  try {
    const { password, name, phone, email } = req.body;
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(password, salt);
    const newUser = await new User({ password:hashedpassword, name, phone, email }).save();
    res.status(201).send({ message: "User Added", newUser });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { password, email } = req.body;
    if(!(email && password)){
        res.status(400).send({message:"All fields are required"});
    }else{
        const findUser = await User.findOne({email});
        if(findUser && await( bcrypt.compare(password,findUser.password))){
            const token = jwt.sign({user_id:findUser._id,email},process.env.TOKEN_KEY,{expiresIn: "3d",});
            return res.status(200).send({"token":token, findUser});
        }else{
          res.status(400).send({message:"wrong credentials"});
        }
      }

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
