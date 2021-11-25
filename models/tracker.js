const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  from: {
    lat : {
      type: Number,
      required: true
    },
    long : {
      type: Number,
      required: true
    },
  },
  to: {
    lat : {
      type: Number,
      required: true
    },
    long : {
      type: Number,
      required: true
    },
  },
  weekDay: {
    type: String,
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  }
}, {timestamps: true});

module.exports = mongoose.model("Tracker", trackerSchema)