const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    server: {type: String},
    prefix: {type: String}
})

module.exports = mongoose.model("prefixes", schema);