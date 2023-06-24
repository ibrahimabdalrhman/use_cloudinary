const express = require('express');
const app = express();
const dotenv = require('dotenv');



app.use(express());

dotenv.config({path:'/config.env'});


app.listen(process.env.PORT, () => {
  console.log("server running on port 3000...");
})