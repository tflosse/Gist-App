const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Idea = require('../models/ideas')

//seed users:
// code for seeding is in ../db/seedRoute
// const seedData = require('../db/seedData');
// router.get('/seed', async (req, res) => {
//     await User.deleteMany({})
//     User.insertMany(seedData, (err,data) => {
//         if (err) console.log(err)
//             else res.send(data)
//     })
// });

// GET all users (this route will not be need on the front end, 
// but is important to have when testing back-end and testing that usernames are created and updated properly)
router.get('/all', (req, res) => {
    User.find({},
        (err, allUsers) => {
            if (err) console.log(err)
            else res.send(allUsers)
        })
});

// GET user by username
router.get('/find/:username', (req, res) => {
    User.find({username: req.params.username.toLowerCase()}, 
        (err, user) => {
        if (err) console.log(err)
        else res.send(user)
    })
});
// verified at http://localhost:4000/users/find/bcurtis

// GET user by email
// router.get('/find/:email', (req, res) => {
//     User.find({email: req.params.email}, 
//         (err, user) => {
//         if (err) console.log(err)
//         else res.send(user)
//     })
// });

// GET user by ID
router.get('/:id', (req, res) => {
    User.findById(req.params.id, 
        (err, user) => {
        if (err) console.log(err)
        else res.send(user)
    })
});
// verified on http://localhost:4000/users/5f176d27a1b2e9bbecffdf02

// POST route to create new user or "log in"
router.post('/login', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        // cookbooks: [req.body.cookbooks]
    },
    (err, newUser) => {
        if (err) console.log(err)
        else res.send(newUser)
    })
});
// verified by posting username and email to Postman

// PUT route to change user info
router.put('/update/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body,
    (err, updatedUser) => {
        if (err) console.log(err)
        else console.log("Info updated")
    })
    User.findById(req.params.id, 
        (err, user) => {
        if (err) console.log(err)
        else res.send(user)
    })
});
// verified using Postman for http://localhost:4000/users/5f176d27a1b2e9bbecffdefd

// push a post to a users' idea array
router.put('/posts/:userId/:id', (req, res) => {
    Idea.findById(req.params.id, (err, idea) => {
        if (err) console.log(err)
        else {
            User.findByIdAndUpdate(
                req.params.userId,
                { $push: {ideas: idea.id}},
                (err, user) => {
                    if (err) console.log(err)
                    else res.send(user)
                }
            )
        }
    })
});
// Idea ID now shows in users' idea array

// GET post and user, and remove post from user's ideas
router.put('/post/remove/:userId/:id', async (req, res) => {
    await Idea.findById(req.params.id, (err, idea) => {
        if (err) console.log(err)
        else {
            User.findOneAndUpdate(
                req.params.userId,
                { $pull: {ideas: req.params.id}},
                (err, user) => {
                    if (err) console.log(err)
                    else res.send(user)
                }
            )
        }
    })
    });  

// DELETE users
router.delete('/delete/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, deleted) => {
        if (err) console.log(err)
        else res.send(deleted)
    })
});
// verified using Postman

module.exports = router
// verified at http://localhost:4000/users/all


