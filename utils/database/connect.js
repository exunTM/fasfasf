const mongoose = require("mongoose");

module.exports = mongoose.connect(process.env.MONGOPATH, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
    })