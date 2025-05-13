import db from "../db/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Lỗi lấy danh sách sản phẩm" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Lỗi lấy sản phẩm" });
  }
};

export const createProduct = async (req, res) => {
  const {
    code,
    name,
    description,
    quantity,
    unit_price,
    unit,
    expiry_date,
    min_stock_level,
    owner_id,
  } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO products (code, name, description, quantity, unit_price, unit, expiry_date, min_stock_level, owner_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        code,
        name,
        description,
        quantity,
        unit_price,
        unit,
        expiry_date,
        min_stock_level,
        owner_id,
      ]
    );
    res
      .status(201)
      .json({ message: "Tạo sản phẩm thành công", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: "Lỗi tạo sản phẩm", details: err.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    code,
    name,
    description,
    quantity,
    unit_price,
    unit,
    expiry_date,
    min_stock_level,
    owner_id,
  } = req.body;
  try {
    await db.query(
      "UPDATE products SET code = ?, name = ?, description = ?, quantity = ?, unit_price = ?, unit = ?, expiry_date = ?, min_stock_level = ?, owner_id = ? WHERE id = ?",
      [
        code,
        name,
        description,
        quantity,
        unit_price,
        unit,
        expiry_date,
        min_stock_level,
        owner_id,
        id,
      ]
    );
    res.json({ message: "Cập nhật sản phẩm thành công" });
  } catch (err) {
    res.status(500).json({ error: "Lỗi cập nhật sản phẩm" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await db.query("DELETE FROM products WHERE id = ?", [req.params.id]);
    res.json({ message: "Xoá sản phẩm thành công" });
  } catch (err) {
    res.status(500).json({ error: "Lỗi xoá sản phẩm" });
  }
};

export const getLowStockProducts = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM products WHERE quantity <= min_stock_level"
    );
    res.json(rows);
    console.log("Low stock products:", rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
