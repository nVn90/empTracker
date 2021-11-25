const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  present: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date, 
    default: Date.now
  }
}, {timestamps: true});

module.exports = mongoose.model("Attendance", attendanceSchema);