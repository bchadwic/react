const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('This is the posts routes folder');
});

// working with the schema to post to the database
router.post('/', (req, res) => {
    console.log(req.body);
})


module.exports = router;