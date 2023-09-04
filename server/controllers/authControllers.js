const pool = require("../db");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT id, email, created_at FROM users");
  try {
    return res.status(200).json({
      success: true,
      message: response.rows,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);

    await pool.query("INSERT INTO users(email, password) VALUES ($1, $2)", [email, hashedPassword]);
    return res.status(201).json({
      success: true,
      message: "Users created successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  let user = req.user;
  let payload = {
    id: user.id,
    email: user.email,
  };

  try {
    const token = await sign(payload, process.env.SECRET_KEY);

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged in successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  getUsers,
  register,
  login,
  protected,
  logout,
};
