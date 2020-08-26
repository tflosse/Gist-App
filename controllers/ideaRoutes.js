const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Idea = require('../models/ideas');

// GET all ideas
router.get('/all', (req, res) => {
    Idea.find({},
        (err, allIdeas) => {
            if (err) console.log(err)
            else res.send(allIdeas)
        })
});

// GET idea by id
// used to find the post and push comments to the array of comments
router.get('/:id', (req, res) => {
    Idea.findById(req.params.id, 
        (err, idea) => {
            if (err) console.log(err)
            else res.send(idea)
    })
});
// verified on http://localhost:4000/ideas/5f178184d6abbfc0c2a94f36

// GET by username
router.get('/search/:username', (req, res) => {
    Idea.find({username: req.params.username}, 
        (err, ideas) => {
            if (err) console.log(err)
            else res.send(ideas)
    })
});
// verified on http://localhost:4000/ideas/search/bcurtis

// GET ideas by keyword
router.get('/keyword/:keyword', (req, res) => {
    Idea.find({keywords: req.params.keyword}, 
        (err, ideas) => {
            if (err) console.log(err)
            else res.send(ideas)
    })
});
// verified on http://localhost:4000/ideas/keyboard/petcare

// Commented out because sorting will have to be done on the front-end
// // GET ideas by most upvotes
// router.get('/search/popular', async (req, res) => {
//     await Idea.find({})
// })

// // GET ideas by most recent
// router.get('/search/recent', async (req, res) => {
//     await Idea.find({})
// })

// PUT update upvotes of Ideas and making other changes (excluding comments)
router.put('/:id', (req, res) => {
    Idea.findByIdAndUpdate(
        req.params.id, req.body, 
        (err, updatedIdea) => {
            if (err) console.log(err)
            else res.send(updatedIdea)
        })
});
// increased votes to 74 on http://localhost:4000/ideas/search/christinaj via postman

// PUT update to push a new comment to an Idea
router.put('/comment/:id', (req, res) => {
    Idea.findByIdAndUpdate(req.params.id, 
        {$push: {comments:
            {username: req.body.username,
            isAnonymous: req.body.isAnonymous,
            commentBody: req.body.commentBody
        }}}, 
        (err, idea) => {
            if (err) console.log(err)
            else res.send(idea)
        }
    )
});
// added a comment to an idea using Postman

// PUT to update an idea by deleting a comment
router.put('/comment/delete/:ideaId/:id', (req, res) => {
    Idea.findByIdAndUpdate(req.params.ideaId, 
        {$pull: {comments: {_id: req.params.id}}}, 
        (err, idea) => {
            if (err) console.log(err)
            else res.send(idea)
        }
    )
});
// verified by deleting a comment

// POST route to create a new idea
router.post('/', (req, res) => {
    Idea.create({
        username: req.body.username,
        title: req.body.title,
        description: req.body.description,
        imgSrc: req.body.imgSrc,
        keywords: req.body.keywords,
    },
    (err, idea) => {
        if (err) console.log(err)
        else res.send(idea)
    })
});
// verified by posting a new idea and adding a comment to it via Postman
// above posts idea independently of user, async below should push the idea ID to ideas array in users 

// router.post('/', async (req, res) => {
//     await Idea.create({
//         username: req.body.username,
//         title: req.body.title,
//         description: req.body.description,
//         keywords: req.body.keywords,
//     },
//     (err, idea) => {
//         if (err) console.log(err)
//         else {
//             User.findOneAndUpdate(
//             { username: res.body.username},
//             { $push: {ideas: res.body.id}},
//             (err, user) => {
//                 if (err) console.log(err)
//                 else res.send(user)
//             }
//         )}
//     })
// });

// DELETE route to remove an idea
// router.delete('/:id', (req, res) => {
//     Idea.findByIdAndDelete(req.params.id, (err, deletedIdea) => {
//         if (err) console.log(err)
//         else res.send(deletedIdea)
//     })
// });
// verified by deleting previously added idea
// but would like to turn it into async functin to return all remaining ideas instead:
router.delete('/:id', async (req, res) => {
    await Idea.findByIdAndDelete(req.params.id, (err, deletedIdea) => {
        if (err) console.log(err)
        else console.log("Idea deleted")
    })
    Idea.find({},
        (err, allIdeas) => {
            if (err) console.log(err)
            else res.send(allIdeas)
        })
});

module.exports = router