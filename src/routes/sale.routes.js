import { Router } from "express";
import {
  getAllSales,
  getSaleById,
  createSale,
  updateSale,
  deleteSale,
  getTodayRevenue,
  getTodayOrderCount,
  getTopSellingProducts,
  getMonthlyRevenue,
  getLatestSales,
  getMonthlyProfit,
} from "../controllers/sale.controller.js";

const router = Router();

router.get("/", getAllSales);
router.get("/revenue/today", getTodayRevenue);
router.get("/revenue/month", getMonthlyRevenue);
router.get("/profit/month", getMonthlyProfit);
router.get("/order-count/today", getTodayOrderCount);
router.get("/top-products", getTopSellingProducts);
router.get("/latest", getLatestSales);
router.get("/:id", getSaleById);
router.post("/", createSale);
router.put("/:id", updateSale);
router.delete("/:id", deleteSale);

export default router;
