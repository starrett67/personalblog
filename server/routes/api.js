const express = require('express');
const router = express.Router();
const mongo = require('../driver/mongo.js');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/post/', (req, res) => {
    mongo.getAllPost()
        .then(posts => {
            console.log("Responding with " + posts.length + " items.");
            res.status(200).json(posts);
        });
});

router.get('/post/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    mongo.getPost(id)
        .then(post => {
            res.send(post);
        });
});

router.post('/post/', (req, res) => {
    let post = req.body;
    console.log(post);
    mongo.savePost(post)
        .then(post => {
            res.send(post);
        });
});

module.exports = router;