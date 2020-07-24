const Post = require('../models/post.model');

module.exports = {
	createPost: async (req, res, next) => {
		let { name, description } = req.body;
		if (!name || !description) return res.status(400).json({ error: 'missing name or description parameter'});
		let newPost = await Post.create({ name, description });
		res.status(200).json({ success: 'post created succefully', post: newPost });
	},

	getAllPosts: async (req, res, next) => {
		let posts = await Post.findAll();
		res.status(200).json({ posts: posts });
	},

	deletePost: async (req, res, next) => {
		let deletedPost = await Post.findAll({ where: { id: req.params.id } });
		let result = await Post.destroy({ where: { id: req.params.id } });
		if (!result) return res.status(404).json({ error: 'post doesn\'t exists' }); 
		res.status(200).json({ success: 'post deleted succefully', post: deletedPost[0] });
	}
}