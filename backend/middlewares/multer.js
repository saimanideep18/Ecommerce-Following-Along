const multer = require('multer');
const path = require('path');

const userImageStore = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/userImages"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname() + '-' + uniqueSuffix + path.extname(file.originalname));
  }
})

const ProductImageStore = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname, "../uploads/productImages")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  })
  const userImage = multer({
    storage: userImageStore,
    limits: { fileSize:5*1024*1024 }, // 1MB
    fileFilter: function (req, file, cb) {
      const extension = path.extname(file.originalname).toLowerCase();
      const mimetype = file.mimetype;
      const allowedExtensions ={
        jpeg:true,
        png:true,
        jpg:true
      }
      const allowedMimetype ={
        'image/jpeg': true,
        'image/png': true,
        'image/jpg': true
      }
      if (!allowedExtensions[extension] ||!allowedMimetype[mimetype]) {
        cb(new Error('File extension is not allowed.'));
      } else {
        cb(null, true);
      }
    }
  });
  
const productImages = multer({storage: ProductImageStore});
module.exports = {userImage,productImages};