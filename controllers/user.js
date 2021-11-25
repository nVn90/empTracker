const User = require("../models/user");
const Order = require("../models/order");

// Get user by ID
exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "No user was found in Database",
      });
    }
    req.profile = user;
    next();
  });
};

// Get Specific User using ID
exports.getUser = (req, res) => {
  // salt, password, createdAt and updatedAt fields are not required to be displayed
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  return res.json(req.profile);
};

// Get All Users
// exports.getAllUsers = (req, res) => {
//   User.find().exec((err, users) => {
//     if (err || !users) {
//       res.json({
//         err: "Error finding users",
//       });
//     }
//     res.json(users);
//   });
// };

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          err: "You are not authorized to update this record",
        });
      }
      user.salt = undefined;
      user.encry_password = undefined;
      res.json(user);
    }
  );
};