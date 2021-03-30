const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

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
// TODO get the word of the day working with the words collection. Can get line 35 to work right, will fix tomorrow
router.get('/wotd/', async (req, res) => {
    let count = Post.words.count(); 
    console.log(count);
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({message : err});
    }
});

module.exports = router;