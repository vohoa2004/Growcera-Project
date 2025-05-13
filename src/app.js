import express from "express";
import productRoutes from "./routes/product.routes.js";
import supplierRoutes from "./routes/supplier.routes.js";

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/suppliers", supplierRoutes);
export default app;
