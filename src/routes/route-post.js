const router = require('express').Router();
const { post } = require('../controllers');

router.get('/post', post.getDataPost);
router.get('/post/:id', post.getDataPostByID);
router.post('/post/add', post.addDataPost);
router.post('/post/edit', post.editDataPost);
router.post('/post/delete/', post.deleteDataPost);

module.exports = router;