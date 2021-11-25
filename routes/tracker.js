const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const { createTracker, getTracker } = require("../controllers/tracker");
const router = express.Router();

router.post("/createTracker", isSignedIn, createTracker)

router.get("/getTracker", isSignedIn, getTracker)

module.exports = router