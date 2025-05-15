import db from "../db/db.js";

export const getAllSales = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM sales");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách bán hàng" });
  }
};

export const getSaleById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM sales WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ error: "Không tìm thấy giao dịch" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Lỗi khi lấy giao dịch" });
  }
};

export const createSale = async (req, res) => {
  const {
    product_id,
    quantity,
    unit_price,
    sale_date,
    customer_name,
    customer_phone,
    note,
  } = req.body;
  const total_price = quantity * unit_price;

  try {
    const [result] = await db.query(
      `INSERT INTO sales (product_id, quantity, unit_price, total_price, sale_date, customer_name, customer_phone, note)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        product_id,
        quantity,
        unit_price,
        total_price,
        sale_date,
        customer_name,
        customer_phone,
        note,
      ]
    );

    // Giảm tồn kho trong bảng products
    await db.query(`UPDATE products SET quantity = quantity - ? WHERE id = ?`, [
      quantity,
      product_id,
    ]);

    res
      .status(201)
      .json({ message: "Tạo giao dịch thành công", id: result.insertId });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Lỗi khi tạo giao dịch", details: err.message });
  }
};

export const updateSale = async (req, res) => {
  const { id } = req.params;
  const {
    product_id,
    quantity,
    unit_price,
    sale_date,
    customer_name,
    customer_phone,
    note,
  } = req.body;
  const total_price = quantity * unit_price;

  try {
    await db.query(
      `UPDATE sales
       SET product_id = ?, quantity = ?, unit_price = ?, total_price = ?, sale_date = ?, customer_name = ?, customer_phone = ?, note = ?
       WHERE id = ?`,
      [
        product_id,
        quantity,
        unit_price,
        total_price,
        sale_date,
        customer_name,
        customer_phone,
        note,
        id,
      ]
    );
    res.json({ message: "Cập nhật giao dịch thành công" });
  } catch (err) {
    res.status(500).json({ error: "Lỗi khi cập nhật giao dịch" });
  }
};

export const deleteSale = async (req, res) => {
  try {
    await db.query("DELETE FROM sales WHERE id = ?", [req.params.id]);
    res.json({ message: "Xoá giao dịch thành công" });
  } catch (err) {
    res.status(500).json({ error: "Lỗi khi xoá giao dịch" });
  }
};

export const getTodayRevenue = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT SUM(total_amount) AS revenue FROM sales WHERE DATE(created_at) = CURDATE()"
    );
    const revenue = rows[0].revenue || 0;
    res.json({ revenue });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTodayOrderCount = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT COUNT(*) AS total_orders FROM sales WHERE DATE(created_at) = CURDATE()"
    );
    const totalOrders = rows[0].total_orders || 0;
    res.json({ total_orders: totalOrders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTopSellingProducts = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        p.id,
        p.name,
        SUM(si.quantity) AS total_sold
      FROM sale_items si
      JOIN products p ON si.product_id = p.id
      GROUP BY si.product_id
      ORDER BY total_sold DESC
      LIMIT 3
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMonthlyRevenue = async (req, res) => {
  try {
    const [rows] = await db.query(`
    SELECT MONTH(created_at) AS month, SUM(total_amount) AS revenue
    FROM sales
    WHERE MONTH(created_at) = MONTH(CURDATE())
      AND YEAR(created_at) = YEAR(CURDATE())
    GROUP BY MONTH(created_at);
    
    `);
    const month = rows[0].month || 0;
    const revenue = rows[0].revenue || 0;
    res.json({ month, revenue });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPreMonthRevenue = async (req, res) => {
  try {
    const [rows] = await db.query(`
    SELECT MONTH(created_at) AS month, SUM(total_amount) AS revenue
    FROM sales
    WHERE MONTH(created_at) = MONTH(CURDATE()) - 1
      AND YEAR(created_at) = YEAR(CURDATE())
    GROUP BY MONTH(created_at);
    `);
    const month = rows[0].month || 0;
    const revenue = rows[0].revenue || 0;
    res.json({ month, revenue });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getLatestSales = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM sales ORDER BY created_at DESC LIMIT 3"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMonthlyProfit = async (req, res) => {
  try {
    const [[{ revenue }]] = await db.query(`
  SELECT SUM(total_amount) AS revenue
  FROM sales
  WHERE MONTH(created_at) = MONTH(CURDATE())
    AND YEAR(created_at) = YEAR(CURDATE())
`);

    const [[{ total_cost }]] = await db.query(`
SELECT
  SUM(si.quantity * avg_cost.cost_price) AS total_cost
FROM sales s
JOIN sale_items si ON s.id = si.sale_id
JOIN (
  SELECT product_id, AVG(cost_price) AS cost_price
  FROM batch_items
  GROUP BY product_id
) avg_cost ON si.product_id = avg_cost.product_id
WHERE MONTH(s.created_at) = MONTH(CURDATE())
  AND YEAR(s.created_at) = YEAR(CURDATE())
`);

    const profit = revenue - total_cost;

    res.json({ revenue, total_cost, profit: profit.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPreMonthProfit = async (req, res) => {
  try {
    const [rows] = await db.query(`
    SELECT
    IFNULL(SUM(s.total_amount), 0) AS revenue,
    IFNULL(SUM(si.quantity * avg_batch_cost.cost_price), 0) AS total_cost,
    IFNULL(SUM(s.total_amount), 0) - IFNULL(SUM(si.quantity * avg_batch_cost.cost_price), 0) AS profit
  FROM sales s
  JOIN sale_items si ON s.id = si.sale_id
  JOIN (
      SELECT product_id, AVG(cost_price) AS cost_price
      FROM batch_items
      GROUP BY product_id
  ) AS avg_batch_cost ON si.product_id = avg_batch_cost.product_id
  WHERE MONTH(s.created_at) = MONTH(CURDATE()) - 1
    AND YEAR(s.created_at) = YEAR(CURDATE())
    `);

    res.json({
      revenue: rows[0].revenue,
      total_cost: rows[0].total_cost,
      profit: rows[0].profit,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRatioOfProfit = async (req, res) => {
  try {
    const [currentMonthProfit] = await db.query(`
    SELECT
    IFNULL(SUM(s.total_amount), 0) AS revenue,
    IFNULL(SUM(si.quantity * avg_batch_cost.cost_price), 0) AS total_cost,
    IFNULL(SUM(s.total_amount), 0) - IFNULL(SUM(si.quantity * avg_batch_cost.cost_price), 0) AS profit
  FROM sales s
  JOIN sale_items si ON s.id = si.sale_id
  JOIN (
      SELECT product_id, AVG(cost_price) AS cost_price
      FROM batch_items
      GROUP BY product_id
  ) AS avg_batch_cost ON si.product_id = avg_batch_cost.product_id
  WHERE MONTH(s.created_at) = MONTH(CURDATE())
    AND YEAR(s.created_at) = YEAR(CURDATE())
    `);
    const [previousMonthProfit] = await db.query(`
    SELECT
    IFNULL(SUM(s.total_amount), 0) AS revenue,
    IFNULL(SUM(si.quantity * avg_batch_cost.cost_price), 0) AS total_cost,
    IFNULL(SUM(s.total_amount), 0) - IFNULL(SUM(si.quantity * avg_batch_cost.cost_price), 0) AS profit
  FROM sales s
  JOIN sale_items si ON s.id = si.sale_id
  JOIN (
      SELECT product_id, AVG(cost_price) AS cost_price
      FROM batch_items
      GROUP BY product_id
  ) AS avg_batch_cost ON si.product_id = avg_batch_cost.product_id
  WHERE MONTH(s.created_at) = MONTH(CURDATE()) - 1
    AND YEAR(s.created_at) = YEAR(CURDATE())
    `);

    // Calculate the profit ratio
    const currentProfit = currentMonthProfit[0].profit || 0;
    const previousProfit = previousMonthProfit[0].profit || 0;
    const ratio =
      previousProfit === 0
        ? 0
        : ((currentProfit - previousProfit) / previousProfit) * 100;
    res.json({ ratio });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRatioOfRevenue = async (req, res) => {
  try {
    const [currentMonthRevenue] = await db.query(`
    SELECT MONTH(created_at) AS month, SUM(total_amount) AS revenue
    FROM sales
    WHERE MONTH(created_at) = MONTH(CURDATE())
      AND YEAR(created_at) = YEAR(CURDATE())
    GROUP BY MONTH(created_at);
    
    `);
    const [previousMonthRevenue] = await db.query(`
    SELECT MONTH(created_at) AS month, SUM(total_amount) AS revenue
    FROM sales
    WHERE MONTH(created_at) = MONTH(CURDATE()) - 1
      AND YEAR(created_at) = YEAR(CURDATE())
    GROUP BY MONTH(created_at);
    
    `);

    // Calculate the profit ratio
    const currentRevenue = currentMonthRevenue[0].revenue || 0;
    const previousRevenue = previousMonthRevenue[0].revenue || 0;
    const ratio =
      previousRevenue === 0
        ? 0
        : ((currentRevenue - previousRevenue) / previousRevenue) * 100;

    res.json({ ratio });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
