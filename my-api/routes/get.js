const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const mongoose = require('mongoose');
const { db } = require('../models/Post');

// router.get('/', (req, res) => {
//     res.send('This is the posts routes folder');
// });

// get the word passed in
router.get('/findWord/:word', async (req, res) => {
    try {
        const posts = await Post.find({word :req.params.word});
        res.json(posts);
    } catch(err){
        res.json({message : err});
    }

});

router.get('/route', async (req, res)  => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({messsage : err});
    }

});

// get the word of the day
router.get('/randomWord', async (req, res) => {
    try {
        const posts = await Post.aggregate([{ $sample: { size: 1 } }]);
        res.json(posts);
    } catch(err) {
        res.json({message : err});
    }
});

module.exports = router;