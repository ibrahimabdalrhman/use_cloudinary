const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: "config.env" });
const DB = require('./config/database').apply();

app.use(express());

const productRoute = require('./routes/product');
app.use('/api/v1/products', productRoute);



app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}...`);
})