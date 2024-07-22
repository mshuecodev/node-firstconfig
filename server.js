const app = require("./app")
const dotenv = require("dotenv")

const PORT = process.env.PORT || 1000

if (process.env.NODE_ENV !== "test") {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`)
	})
}
