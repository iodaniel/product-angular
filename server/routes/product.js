//routes for products
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
//api/product 

router.post('/', productController.createProduct);
router.get('/', productController.obtainProduct);
router.put('/:id', productController.updateProduct);
router.get('/:id', productController.updateOneProduct);
router.delete('/:id', productController.deleteProduct);
module.exports = router;