import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

// @desc    Fetch all products
router.route('/').get(getProducts)

// @desc    Fetch single product
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router
