const getUsers = "SELECT id, email, created_at FROM users";
const register = "INSERT INTO users(email, password) VALUES ($1, $2)";
