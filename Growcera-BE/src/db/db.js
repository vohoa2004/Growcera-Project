import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000, // 10 seconds
});

// Test the connection
pool
  .getConnection()
  .then((connection) => {
    console.log("Connected to the database");
    connection.release();
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

export default pool;
