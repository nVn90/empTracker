const Invoice = require("../models/invoice");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");

exports.createInvoice = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        err: "Problem with image",
      });
    }

    // Restrictions on fields
    // Destructure the fields
    const { shopName, shopAddress, itemRequired, itemQuantity, paymentRcvd, paymentType, dueBalance } = fields;
    if (!shopName || !shopAddress || !itemRequired || !itemQuantity || !paymentRcvd || !paymentType || !dueBalance) {
      return res.status(400).json({
        err: "Please include all fields",
      });
    }

    let invoice = new Invoice(fields);

    // Handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          err: "File size is too big",
        });
      }
      invoice.photo.data = fs.readFileSync(file.photo.path);
      invoice.photo.contentType = file.photo.type;
    }

    console.log(invoice);

    // save to DB
    invoice.save((err, invoice) => {
      if (err) {
        res.status(400).json({
          err: "Saving invoice in DB is FAILED",
        });
      }
      res.json(invoice);
    });
  });
};
