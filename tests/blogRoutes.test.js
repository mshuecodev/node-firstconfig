const request = require("supertest")
const mongoose = require("mongoose")
const app = require("../app")
const Blog = require("../models/blog")

beforeAll(async () => {
	jest.setTimeout(30000) // Increase timeout if needed

	const url = process.env.MONGO_URI
	await mongoose.connect(url)
})

afterAll(async () => {
	await mongoose.connection.db.dropDatabase()
	await mongoose.connection.close()
})

describe("Blog API", () => {
	let blogID

	// TESTING CREATE
	test("should create new blog", async () => {
		const response = await request(app).post("/api/blog").send({
			title: "Find your why",
			author: "Simon Sinek"
		})

		expect(response.status).toBe(201)
		expect(response.body.title).toBe("Find your why")
		blogID = response.body._id
	})

	// TESTING GETALL BLOGS
	test("should get all blogs", async () => {
		const response = await request(app).get("/api/blog")

		expect(response.status).toBe(200)
		expect(response.body.length).toBeGreaterThan(0)
	})

	// TESTING GET BLOG BY ID
	test("should get a blog by ID", async () => {
		const response = await request(app).get(`/api/blog/${blogID}`)

		expect(response.status).toBe(200)
		expect(response.body._id).toBe(blogID)
	})

	// TESTING UPDATE BLOG
	test("should update a blog", async () => {
		const response = await request(app).put(`/api/blog/${blogID}`).send({
			title: "Find your why changed"
		})

		expect(response.status).toBe(200)
		expect(response.body.name).toBe("Find your why changed")
	})

	// TESTING DELETE
	test("should delete a blog", async () => {
		const response = await request(app).delete(`/api/blog/${blogID}`)

		expect(response.status).toBe(200)
		expect(response.body.message).toBe("Data deleted")
	})
})
