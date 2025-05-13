import db from "../db/db.js";

export const getAllSuppliers = async (req, res) => {
  try {
    // return name, phone, address, rating
    const [rows] = await db.query(
      "SELECT name, phone, address, rating FROM suppliers"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách nhà cung cấp" });
  }
};

export const getSupplierById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM suppliers WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ error: "Không tìm thấy nhà cung cấp" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Lỗi khi lấy nhà cung cấp" });
  }
};

export const createSupplier = async (req, res) => {
  const { name, email, phone, address, rating, latitude, longitude } = req.body;
  try {
    const [result] = await db.query(
      `INSERT INTO suppliers (name, email, phone, address, rating, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone, address, rating, latitude, longitude]
    );
    res
      .status(201)
      .json({ message: "Thêm nhà cung cấp thành công", id: result.insertId });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Lỗi thêm nhà cung cấp", details: err.message });
  }
};

export const updateSupplier = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, rating, latitude, longitude } = req.body;
  try {
    await db.query(
      `UPDATE suppliers SET name = ?, email = ?, phone = ?, address = ?, rating = ?, latitude = ?, longitude = ? WHERE id = ?`,
      [name, email, phone, address, rating, latitude, longitude, id]
    );
    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res.status(500).json({ error: "Lỗi cập nhật nhà cung cấp" });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    await db.query("DELETE FROM suppliers WHERE id = ?", [req.params.id]);
    res.json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(500).json({ error: "Lỗi xoá nhà cung cấp" });
  }
};
