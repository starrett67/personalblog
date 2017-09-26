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
            res.send(posts);
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

router.post('/post/:id', (req, res) => {
    let id = req.params.id;
    mongo.getPost(id)
        .then(post => {
            res.send(post);
        });
});

module.exports = router;