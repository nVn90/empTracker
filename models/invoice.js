const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    shopAddress: {
      type: String,
      required: true,
    },
    itemRequired: {
      type: String,
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
    paymentRcvd: {
      type: Boolean,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    dueBalance: {
      type: Number,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
