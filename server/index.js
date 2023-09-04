const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");
const costumerRoutes = require("./routes/costumers");
const authRoutes = require("./routes/auth");

require("dotenv").config("/.env");
const PORT = process.env.PORT;

// Passport middleware
require("./middlewares/passport-middleware");

// Initialize middlewares
app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/customers", costumerRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on the port  ${PORT}`);
});
