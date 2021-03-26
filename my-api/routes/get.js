const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// router.get('/', (req, res) => {
//     res.send('This is the posts routes folder');
// });

// get the word passed in
router.get('/:word', async (req, res) => {
    try {
        const posts = await Post.find({word :req.params.word});
        res.json(posts);
    } catch(err){
        res.json({message : err});
    }

});

router.get('/', async (req, res)  => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({messsage : err});
    }

});



module.exports = router;