const mongoose = require('../db/connection');
const User = require('./users')
const Comment = require('./comments')

const commentSchema = new mongoose.Schema(
    {
        username: String,
        // username: {
        //     ref: "User",
        //     type: mongoose.Schema.Types.ObjectId
        // },
        isAnonymous: Boolean,
        commentBody: { type: String, required: true },
    },
    {timestamps: true}
);

const ideaSchema = new mongoose.Schema(
    {
        username: String,
        title: { type: String, required: true },
        description: { type: String, required: true },
        imgSrc: String,
        keywords: Array,
        // should be an array of strings
        votes: { type: Number, default: 0 },
        // counter
        comments: {type: [commentSchema], default: []}
    },
    {timestamps: true}
);

const Idea = mongoose.model("Idea", ideaSchema);
module.exports = Idea;