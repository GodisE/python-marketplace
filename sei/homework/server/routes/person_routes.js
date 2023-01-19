// require Express
const express = require("express");

// require the Model we just created
const Person = require("../models/person");

// Creating a router for us to make paths on
const route = express.Router();

route.get("/person", (req, res, next) => {
  Person.find()
    .then((person) => {
      return person.map((person) => person);
    })
    .then((person) => res.status(200).json({ person: person }))
    .catch(next);
});

route.get("/person/:id", (req, res, next) => {
    Person.findById(req.params.id)
    .then((person) => res.status(200).json({ person: person }))
    .catch(next)
})

// CREATE
// POST /characters
route.post("/person", (req, res, next) => {

//   person = {}
  Person.create(req.body.person)

    .then((person) => {
      res.status(201).json({ person: person })
    })
    .catch(next)

})

// exporting the router to use elsewhere
module.exports = route;
