import pool from "../db/db.js";

// Get all customer debts
export const getAllCustomerDebts = async (req, res) => {
  try {
    // return customer_name, amount, note, created_at
    const [rows] = await pool.query(
      "SELECT customer_name, phone, amount, note, created_at FROM customer_debts"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get debt by customer ID
export const getCustomerDebtById = async (req, res) => {
  const { customerId } = req.params;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM customer_debt WHERE customer_id = ?",
      [customerId]
    );
    if (rows.length === 0)
      return res
        .status(404)
        .json({ message: "No debt found for this customer" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create or update customer debt
export const createOrUpdateCustomerDebt = async (req, res) => {
  const { customer_id, total_debt } = req.body;
  try {
    const [rows] = await pool.query(
      `INSERT INTO customer_debt (customer_id, total_debt)
       VALUES (?, ?)
       ON DUPLICATE KEY UPDATE total_debt = ?`,
      [customer_id, total_debt, total_debt]
    );
    res.json({ message: "Debt recorded", result: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete customer debt
export const deleteCustomerDebt = async (req, res) => {
  const { customerId } = req.params;
  try {
    const [rows] = await pool.query(
      "DELETE FROM customer_debts WHERE customer_id = ?",
      [customerId]
    );
    res.json({ message: "Debt deleted", affectedRows: rows.affectedRows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
