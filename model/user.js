const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: 4,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        role:{
            type: String,
            default: "user",
        },
    },{ timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

