const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const { markAttendance, getAttendance } = require("../controllers/attendance");
const router = express.Router();

router.post("/markAttendance", isSignedIn, markAttendance);

router.get("/getAttendance", isSignedIn, getAttendance);

module.exports = router;
