require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const PORT = 3002;

// importing routes
const authRoutes = require("./routes/auth")
const trackerRoutes = require("./routes/tracker")
const attendanceRoutes = require("./routes/attendance")
const invoiceRoutes = require("./routes/invoice")

// DB Connection
mongoose.connect(process.env.DATABASE_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("DB Connection established")
})

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api", authRoutes)
app.use("/api", trackerRoutes)
app.use("/api", attendanceRoutes)
app.use("/api", invoiceRoutes)

// server
app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})