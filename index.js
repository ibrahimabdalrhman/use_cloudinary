const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: "config.env" });
const DB = require('./config/database').apply();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

const productRoute = require('./routes/product');
app.use('/api/v1/products', productRoute);



app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}...`);
})