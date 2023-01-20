// URI string (uniform resource identifier)
// URLs are a more specific version of URI
const mongooseBaseName = "dnd-campaign-tracker"

//determine if this is running as a development or a test
const dataabase = {
    // 
    development: `mongodb://127.0.0.1:27020/${mongooseBaseName}-development`,
    //if this is a test the database will be named mongodb://localhost/${mongooseBaseName}-test
    test:  `mongodb://127.0.0.1:27020/${mongooseBaseName}-test`
}

const localDb = process.env.TESTENV ? dataabase.test : dataabase.development

//see if there is a production or dev env

const currentDb = process.env.DB_URI || localDb

//should have a uri atring connected to a dev, tex=st or production env
//export to use elsewhere

module.exports = currentDb
