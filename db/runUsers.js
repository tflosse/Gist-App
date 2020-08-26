const mongoose = require('./connection');
const db = mongoose.connection;
const User = require('../models/users');
const Seed = require('./seedUsers');


db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
    await User.deleteMany({})
    const users = Seed;
    await User.insertMany(users);

    console.log("Added seed users!");
};
const run = async () => {
    await main();
    db.close();
};

run();