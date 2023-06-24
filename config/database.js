const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(conn=>{console.log("database connected...");});