const getCustomers = "SELECT * FROM customers";
const getCustomerById = "SELECT * FROM customers WHERE id = $1";
const checkEmailExist = "SELECT c FROM customers c WHERE c.email = $1";
const addCustomer = "INSERT INTO customers (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteCustomer = "DELETE FROM customers WHERE id = $1";
const updateCustomer = "UPDATE customers SET name = $1 WHERE id = $2";

module.exports = {
  getCustomers,
  getCustomerById,
  checkEmailExist,
  addCustomer,
  deleteCustomer,
  updateCustomer,
};
