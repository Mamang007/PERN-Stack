const express = require("express");
const app = express();
const userRoutes = require("./routes/index");

require("dotenv").config("/.env");
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on the port  ${PORT}`);
});
