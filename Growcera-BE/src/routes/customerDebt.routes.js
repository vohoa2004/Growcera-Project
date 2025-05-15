import express from "express";
import {
  getAllCustomerDebts,
  getCustomerDebtById,
  createOrUpdateCustomerDebt,
  deleteCustomerDebt,
} from "../controllers/customer-debt.controller.js";

const router = express.Router();

router.get("/", getAllCustomerDebts);
router.get("/:customerId", getCustomerDebtById);
router.post("/", createOrUpdateCustomerDebt);
router.delete("/:customerId", deleteCustomerDebt);

export default router;
