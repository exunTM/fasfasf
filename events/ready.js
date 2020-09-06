const rootdb = require("../utils/database/connect");

rootdb.then(() => console.log(`- Connected to the data base`))