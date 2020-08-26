const mongoose = require('./connection');
const db = mongoose.connection;
const Idea = require('../models/ideas');
const SeedPosts = require('./seedIdeas');


db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
    await Idea.deleteMany({})
    const posts = SeedPosts;
    await Idea.insertMany(posts);

    console.log("Added seed posts!");
};
const run = async () => {
    await main();
    db.close();
};

run();