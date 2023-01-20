//file names are singular lowercase names
const mongoose = require("mongoose");
const Schema = mongoose.Schema

//SCHEMAS ARE RULES

//first param is the rules
//second params are the options
const characterSchema = new Schema(
  //first param
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    strength: {
      type: Number,
      required: true,
      min: 1,
      max: 30,
    },
  },
  //second param
  {
    timestamps: true,
  }
);

// mongosh collection is called lowecase characters
//MODELS ARE THE METHODS
const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
