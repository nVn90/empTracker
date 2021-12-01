require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const path = require("path")
const PORT = process.env.PORT || 3334;

// setting up view engine
app.set("view engine", "ejs")

// importing routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
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
app.use(express.static(path.resolve(__dirname, "html")))

// routes
app.get("/", (req, res)=>{
  res.sendFile("index.html");
})
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", trackerRoutes)
app.use("/api", attendanceRoutes)
app.use("/api", invoiceRoutes)

// server
app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})