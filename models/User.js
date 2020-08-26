const mongoose = require('../db/connection')
const Idea = require('./ideas');

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true},
        password: String,
        email: String,
        canContact: { type: Boolean, default: true },
        photo: { src: String, alt: String},
        ideas: [{ref: "Idea",
            type: mongoose.Schema.Types.ObjectId
        }]
        // saved: [{
        //     ref: "Idea",
        //     type: mongoose.Schema.Types.ObjectId,
        //     default: null
        // }]
    },
);

const User = mongoose.model("User", userSchema);
module.exports = User;