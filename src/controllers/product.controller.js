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
  const productId = req.params.id;

  try {
    const [rows] = await db.query(
      `
      SELECT 
        p.id AS product_id,
        p.code,
        p.name,
        p.description,
        p.quantity,
        p.unit_price,
        p.unit,
        p.imageUrl,
        p.created_at AS product_created_at,
        pb.id AS batch_id,
        pb.batch_code,
        pb.quantity AS batch_quantity,
        pb.expiration_date
      FROM products p
      LEFT JOIN batch_items bi ON p.id = bi.product_id
      LEFT JOIN product_batches pb ON bi.batch_id = pb.id
      WHERE p.id = ?
    `,
      [productId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Tách product & batches
    const {
      product_id,
      code,
      name,
      description,
      quantity,
      unit_price,
      unit,
      product_created_at,
      imageUrl,
    } = rows[0];

    const batches = rows
      .filter((row) => row.batch_id !== null)
      .map((row) => ({
        batch_id: row.batch_id,
        batch_code: row.batch_code,
        quantity: row.batch_quantity,
        expiration_date: row.expiration_date,
        import_date: row.import_date,
        created_at: row.batch_created_at,
      }));

    res.json({
      product: {
        product_id,
        code,
        name,
        description,
        quantity,
        unit_price,
        unit,
        imageUrl,
        created_at: product_created_at,
      },
      batches,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
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

export const getProductsNearExpire = async (req, res) => {
  try {
    const [rows] = await db.query(`
    SELECT DISTINCT p.*, pb.expiration_date
    FROM products p
    JOIN batch_items bi ON p.id = bi.product_id
    JOIN product_batches pb ON bi.batch_id = pb.id
    WHERE pb.expiration_date <= DATE_ADD(CURDATE(), INTERVAL 30 DAY)
  AND pb.expiration_date >= CURDATE();
    `);
    // add field expiry_after to rows
    rows.forEach((row) => {
      const expiryDate = new Date(row.expiration_date);
      const currentDate = new Date();
      const timeDiff = expiryDate - currentDate;
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      row.expiry_after = daysDiff;
    });

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
