const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/api/users");
// connect DataBase
connectDB();

app.use(cors({}));

//init midilware
app.use(express.json({ extended: false }));

//Define Route
app.use("/api/users", userRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));

app.get("/", (req, res) => res.send("Api Running"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-Request-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
