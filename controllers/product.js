const Product = require('../models/product');
const cloudinary = require('../utils/cloudinary');

exports.createProduct = async (req, res) => {
  try {
    console.log(req.files.image);
    const { name } = req.body;
    if (req.files.image) {
      const image = req.files.image
      const uploadRes = await cloudinary.uploader.upload(image.tempFilePath, {
        public_id: `${Date.now()}`,
        resource_type: "auto",
        folder: "images",
        width: 400,
        crop: "pad",
      });

      if (!uploadRes) {
            res.status(500).json({
              status: "false",
              err: err,
            });
      }
      const product = await Product.create({ name, image: uploadRes.url });
      // res.json(uploadRes)
      res.status(201).json({
        statuus: "true",
        message: "create new product successfully",
        data: product,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "false",
      err: err
    });
  }
  
};

exports.getProducts = async (req, res) => {
  
  const products = await Product.find();
      res.status(200).json({
        status: "true",
        data: products,
      });
}