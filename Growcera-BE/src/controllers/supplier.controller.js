import db from "../db/db.js";

export const getAllSuppliers = async (req, res) => {
  try {
    // return name, phone, address, rating
    const [rows] = await db.query(
      "SELECT id, name, phone, imageUrl, address, rating FROM suppliers"
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

export const getProductsBySupplierId = async (req, res) => {
  const supplierId = req.params.id;
  try {
    const [rows] = await db.query(
      `SELECT 
        s.id AS supplier_id,
        s.name AS supplier_name,
        s.email,
        s.phone,
        s.imageUrl,
        s.address,
        s.latitude,
        s.longitude,
        s.rating,
        s.created_at AS supplier_created_at,

        sp.id AS product_id,
        sp.code,
        sp.name AS product_name,
        sp.description,
        sp.unit,
        sp.unit_price,
        sp.image_url,
        sp.product_url,
        sp.created_at AS product_created_at
      FROM suppliers s
      LEFT JOIN supplier_products sp ON s.id = sp.supplier_id
      WHERE s.id = ?`,
      [supplierId]
    );

    const supplierInfo = {
      id: rows[0].supplier_id,
      name: rows[0].supplier_name,
      email: rows[0].email,
      phone: rows[0].phone,
      imageUrl: rows[0].imageUrl,
      address: rows[0].address,
      latitude: rows[0].latitude,
      longitude: rows[0].longitude,
      rating: rows[0].rating,
      products: [],
    };

    rows.forEach((row) => {
      if (row.product_id) {
        supplierInfo.products.push({
          id: row.product_id,
          code: row.code,
          name: row.product_name,
          description: row.description,
          unit: row.unit,
          unit_price: row.unit_price,
          image_url: row.image_url,
          product_url: row.product_url,
          created_at: row.product_created_at,
        });
      }
    });

    res.json(supplierInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
