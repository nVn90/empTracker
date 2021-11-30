const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const { createInvoice } = require("../controllers/invoice");
const router = express.Router();

router.post("/createInvoice", isSignedIn, createInvoice);
// router.get("/", isSignedIn, getInvoice)

module.exports = router;
