const Blog = require("../models/blog")

exports.getBlogs = async (req, res) => {
	try {
		const result = await Blog.find()
		res.json(result)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.getBlogByID = async (req, res) => {
	try {
		const result = await Blog.findById(req.params.id)
		if (!result) return res.status(404).json({ message: "Data not found" })
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

exports.updateBlog = async (req, res) => {
	try {
		const result = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
		if (!result) return res.status(404).json({ message: "Data not found" })
		res.status(200).json(result)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

exports.deleteBlog = async (req, res) => {
	try {
		const result = await Blog.findByIdAndDelete(req.params.id)
		if (!result) return res.status(404).json({ message: "Data not found" })
		res.status(200).json({ message: "Data deleted" })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}
