const express = require("express")
const { connectDB } = require("./config")
const blogRoutes = require("./routes/blogRoutes")

const app = express()

// Connect to database
connectDB()

// Middleware
app.use(express.json())

// Routes
app.use("/api/blog", blogRoutes)

module.exports = app
