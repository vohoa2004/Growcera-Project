import { Router } from "express";
import {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
  getProductsBySupplierId,
} from "../controllers/supplier.controller.js";

const router = Router();

router.get("/", getAllSuppliers);
router.get("/products/:id", getProductsBySupplierId);
// router.get("/:id", getSupplierById);
// router.post("/", createSupplier);
// router.put("/:id", updateSupplier);
// router.delete("/:id", deleteSupplier);

export default router;
