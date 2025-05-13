import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./config/database.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/error-handler.js";

dotenv.config();

// Khởi tạo express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Kiểm tra kết nối database
testConnection();

// Routes
app.use("/api", routes);

// Route mặc định
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node.js MySQL API" });
});

// Error handling middleware (luôn đặt cuối cùng)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
