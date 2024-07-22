const express = require("express")
const { getBlogs, createBlog, getBlogByID, updateBlog, deleteBlog } = require("../controllers/blogController")
const router = express.Router()

router.get("/", getBlogs)
router.get("/:id", getBlogByID)
router.post("/", createBlog)
router.put("/:id", updateBlog)
router.delete("/:id", deleteBlog)

module.exports = router
