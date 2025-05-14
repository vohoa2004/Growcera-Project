import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import supplierRoutes from "./routes/supplier.routes.js";
import saleRoutes from "./routes/sale.routes.js";
import customerDebtRoutes from "./routes/customerDebt.routes.js";
const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/customer-debt", customerDebtRoutes);

export default app;
