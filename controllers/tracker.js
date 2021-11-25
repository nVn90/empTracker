const Tracker = require("../models/tracker");

exports.createTracker = (req, res) => {
  const tracker = new Tracker(req.body);
  tracker.save((err, tracker) => {
    if (err) {
      console.log(err)
      return res.status(400).json({
        err: "NOT able to save location in DB",
      });
    }
    res.json(tracker);
  });
};


exports.getTracker = (req, res) => {
  Tracker.find().exec((err, tracker) => {
    if (err) {
      return res.status(400).json({
        err: "NO Tracker found",
      });
    }
    res.json(tracker);
  });
};
