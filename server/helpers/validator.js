const { check } = require("express-validator");
const pool = require("../db");
const { compare } = require("bcryptjs");

const password = check("password").isLength({ min: 6, max: 15 }).withMessage("Password has to be between 6 and 15 characters!");

const email = check("email").isEmail().withMessage("Please provide a valid email!");

// If email exist
const emailExist = check("email").custom(async (value) => {
  const results = await pool.query("SELECT * FROM users WHERE email = $1", [value]);

  if (results.rows.length) {
    throw new Error("Email already exist!");
  }
});

// Login validation
const loginFieldCheck = check("email").custom(async (value, { req }) => {
  const results = await pool.query("SELECT * FROM users WHERE email = $1", [value]);

  if (!results.rows.length) {
    throw new Error("Email does not exist!");
  }

  const validPassword = await compare(req.body.password, results.rows[0].password);
  if (!validPassword) {
    throw new Error("Wrong Password!");
  }

  req.user = results.rows[0];
});

module.exports = {
  registerValidation: [email, password, emailExist],
  loginValidation: [loginFieldCheck],
};
