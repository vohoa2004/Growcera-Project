import bcrypt from "bcrypt";
import db from "../db/db.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (rows.length === 0) {
      return res.status(400).json({ message: "Email không tồn tại" });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(400).json({ message: "Sai mật khẩu" });
    }

    // Trả về thông tin user (loại bỏ mật khẩu)
    const { password_hash, ...userWithoutPassword } = user;

    // return 200
    res.status(200).json({
      message: "Đăng nhập thành công",
      user: userWithoutPassword,
    });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};
