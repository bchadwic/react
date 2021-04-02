const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
    console.log(req);
    const post = new Post({
        word: req.body.word,
        definition: req.body.definition,
        rank: 0,
        user: req.body.user
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({message : err});
    }
});

module.exports = router;
// router.get('/', (req, res) => {
//     res.send('This is the posts routes folder');
// });

// get all the posts
// router.get('/', async (req, res) => {
//     try {
//         const posts = await Post.find();
//         res.json(posts);
//     } catch(err){
//         res.json({message:err});
//     }

// });

// // install body parser to convert raw posts to json
// // working with the schema to post to the database
// // submits a post
// router.post('/', async (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     try{
//     const savedPost = await post.save();
//     res.json(savedPost);
//     } catch(err) {
//         res.json({message : err});
//     }
        
// });

// // get a specific post
// router.get('/:postId', async (req, res) => {
//     // echo out the params
//     //console.log(req.params.postId);
//     try {
//         const post = await Post.findById(req.params.postId);
//         res.json(post);
//     } catch (err) {
//         res.json({message : err});
//     }

// });

// // deleting a post
// router.delete('/:postId', async (req, res) => {
//     try {
//         const removedPost = await Post.remove({ _id : req.params.postId })
//         res.json(removedPost);
//     } catch (err) {
//         res.json({message : err});
//     }

// });

// // updating a post
// router.patch('/:postId', async (req, res) => {
//     try {
//         const updatedPost = await Post.updateOne(
//             { _id : req.params.postId },
//             { $set: {title : req.body.title}}
//         );
//         res.json(updatedPost);
//     } catch (err) {
//         res.json({message : err});
//     }

// });
