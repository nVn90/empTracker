const Attendance = require("../models/attendance");

exports.markAttendance = (req, res) => {
  const attendance = new Attendance(req.body);
  attendance.save((err, attendance) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save attendance in DB",
      });
    }
    res.json({ attendance });
  });
};


exports.getAttendance = (req, res) => {
  Attendance.find().exec((err, attendance) => {
    if (err) {
      return res.status(400).json({
        err: "NO Tracker found",
      });
    }
    res.json(attendance);
  });
};
