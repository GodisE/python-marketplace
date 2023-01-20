//command center HQ where all the important stuff happens
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const db = require("./config/db");
const characterRoutes = require("./routes/character_routes"); 
const campaignRoutes = require("./routes/campaign_routes")

const requestLogger = require("./lib/request_logger")
const characterSeed = require("./lib/character_seed")



const PORT = 8000;

// new error from mongoose - deprication warning
//this looks at the schema and if u try to create something that isnt
//in your schema it rejects it
mongoose.set("strictQuery", true)

//connection string bw local db and this express app
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500` }))

//sending json
// need to be able to accept json
app.use(express.json())
// app.use(requestLogger)

app.use(characterRoutes)
app.use(campaignRoutes)
app.use("/seed", characterSeed)





app.listen(PORT, () => {
  console.log("i hear u shawty on port " + PORT)
});

module.exports = app;
