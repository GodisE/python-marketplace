const express = require('express')
// require mongoose
const mongoose = require('mongoose')

const cors = require("cors")
// require the URI
const db = require('./config/db')

const personRoutes = require("./routes/person_routes")

const PORT = 8000

mongoose.set('strictQuery', true)

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const app = express()

app.use(express.json())

app.use(cors({ origin: `http://127.0.0.1:5500` }))

app.use(personRoutes)


app.listen(PORT, () => {
	console.log('i hear u shawty on port ' + PORT)
})

module.exports = app