const Blog = require("../models/blog")

exports.getBlogs = async (req, res) => {
	try {
		const result = await Blog.find()
		res.json(result)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.createBlog = async (req, res) => {
	try {
		const data = new Blog({ name, email, password })
		await data.save()
		res.status(201).json(data)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}
