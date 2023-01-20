const express =require('express')

const { handle404 } = require('../lib/custom_errors')

const Campaign = require('../models/campaign')

const route = express.Router()

//INDEX
// GET /characters
route.get('/campaigns', (req, res, next) => {
    Campaign.find()
        .then(campaigns => {
            // THIS is not Array.protype.map
            // document method (model method) .map
            return campaigns.map(campaign => campaign)
        })
        .then(campaigns => {
            res.status(200).json({ campaigns: campaigns })
        })
        .catch(next)
})

// SHOW
// GET /characters/:id
route.get('/campaigns/:id', (req, res, next) => {
    Campaign.findById(req.params.id)
        .then(handle404)
        .then(campaign => {
            res.status(200).json({ campaign: campaign })
        })
        .catch(next)
})

// CREATE
// POST /characters
route.post('/campaigns', (req, res, next) => {
    // req.body
    // character: {}
    Campaign.create(req.body.campaign)
        .then(campaign => {
            // top lvl of this object is character
            res.status(201).json({ campaign: campaign })
        })
        .catch(next)
})

// UPDATE
// PATCH /character/:id
route.patch('/campaigns/:id', (req, res, next) => {
    Campaign.findById(req.params.id)
        .then(handle404)
        .then(campaign => {
            // { character: {} }
            return campaign.updateOne(req.body.campaign)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
// DELETE /characters/:id
route.delete('/campaigns/:id', (req, res, next) => {
    Campaign.findById(req.params.id)
        .then(handle404)
        .then(campaign => {
            return campaign.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})
module.exports = route