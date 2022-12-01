const express=require ("express");
const upload = require("../utils/multer")
const { addproduct, getAllproduct, getProductById, updateProduct, deleteProduct } = require("../controllers/productController");


const router = express.Router();
/**
 * @Params POST /product/addprod
 * @description add new product
 * @acces public 
 */
router.post('/addprod',upload("products").single('file'),addproduct)
/**
 * @Params Get /product
 * @description get Allproduct
 * @acces public
 */
router.get('/', getAllproduct)
/**
 * @Params Get /product/:idprod
 * @description get one product by id
 * @acces public
 */
 router.get('/:idprod',getProductById)


 /**
 * @Params Put /product/:idprod
 * @description Update one product
 * @acces public
 */
  router.put('/:idprod',upload("products").single('file'),updateProduct)

  /**
 * @Params Delete /product/:idprod
 * @description Delete one product
 * @acces public
 */
   router.delete('/:idprod',deleteProduct)








module.exports=router;
