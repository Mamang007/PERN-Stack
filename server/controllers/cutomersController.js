const pool = require("../db");
const queries = require("../models/customersModel");

const getCustomers = async (req, res) => {
  try {
    const results = await pool.query(queries.getCustomers);

    return res.status(200).json({
      success: true,
      users: results.rows,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const getCustomerById = async (req, res) => {
  const id = parseInt(req.params.id);

  const results = await pool.query(queries.getCustomerById, [id]);
  try {
    const noCustomerFound = !results.rows.length;
    if (noCustomerFound) {
      throw new Error("Customer does not exist in database!");
    }
    return res.status(200).json({
      success: true,
      user: results.rows,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const addCustomer = async (req, res) => {
  const { name, email, age, dob } = req.body;

  const checkEmail = await pool.query(queries.checkEmailExist, [email]);

  try {
    if (checkEmail.rows.length) {
      throw new Error("Email already exist!");
    }
    pool.query(queries.addCustomer, [name, email, age, dob]);
    return res.status(201).json({
      success: true,
      message: "Customer Created Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const deleteCustomer = async (req, res) => {
  const id = parseInt(req.params.id);

  const checkCustomer = await pool.query(queries.getCustomerById, [id]);
  try {
    if (!checkCustomer.rows.length) {
      throw new Error("Customer does not exist in database!");
    }
    pool.query(queries.deleteCustomer, [id]);
    return res.status(200).json({
      success: true,
      message: "Customer removed succesfully!",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

//Update Name
const updateCustomer = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const checkCustomer = await pool.query(queries.getCustomerById, [id]);
  try {
    if (!checkCustomer.rows.length) {
      throw new Error("Customer does not exist in database!");
    }
    pool.query(queries.updateCustomer, [name, id]);
    return res.status(200).json({
      success: true,
      message: "Customer updated successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  deleteCustomer,
  updateCustomer,
};
