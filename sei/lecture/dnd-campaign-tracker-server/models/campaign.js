const mongoose = require("mongoose");
const Schema = mongoose.Schema

const campaignSchema =  new Schema (
    {
        name: {
            type: String,
            required: true
        }
    }, 
    {
        timestamps: true
    }
)


const Campaign = mongoose.model("Camapign", campaignSchema)

module.exports = Campaign
