const express = require("express");
const router = express.Router();
const config = require("config");
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@route  POST api/users
// @desc  Register User
// @acess public

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    console.log("hey" + JSON.stringify(req.body));
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      phone: req.body.phone,
      passcode: req.body.passcode,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({ message: "User Created!", result: result });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
});
//Login Route
router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Auth failed",
      });
    });
});

module.exports = router;
