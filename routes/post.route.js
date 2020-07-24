const router = require('express-promise-router')();
const postController = require('../controllers/post.controller');

router.route('/')
	.get(postController.getAllPosts)
	.post(postController.createPost)

router.route('/:id')
	.delete(postController.deletePost)

module.exports = router;