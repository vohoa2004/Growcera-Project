import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
  getProductsNearExpire,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/low-stock", getLowStockProducts);
router.get("/near-expire", getProductsNearExpire);

//router.get("/:id", getProductById);
//router.post("/", createProduct);
//router.put("/:id", updateProduct);
//router.delete("/:id", deleteProduct);

export default router;
