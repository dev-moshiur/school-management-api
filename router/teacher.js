const dataGuard = require("../middleweres/dataGuard");
const router = require("express").Router();
const Teacher = require("../models/Teacher");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const upload = require("../middleweres/multer");
dotenv.config();

router.post("/", async (req, res) => {
  const single = new Teacher(req.body);
  try {
    let saved = await single.save();

    res.status(200).json(saved);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await Teacher.find({ ...req.query }).limit(5);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const result = await Teacher.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.put("/:id", async (req, res) => {
  // if (req.body.id === req.userId || req.body.isAdmin) {
  // if (req.body.password) {
  //   try {
  //     const salt = await bcrypt.genSalt(10);
  //     req.body.password = await bcrypt.hash(req.body.password, salt);
  //   } catch (err) {
  //     return res.status(500).json(err);
  //   }
  // }
  try {
    const user = await Teacher.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
  // } else {
  //   return res.status(403).json("You can update only your account!");
  // }
});

//delete user
router.delete("/:id", async (req, res) => {
  // if (req.body.id === req.id || req.body.isAdmin) {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.status(200).json("Account has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
  // } else {
  //   return res.status(403).json("You can delete only your account!");
  // }
});

//get a user
router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    // const { password, updatedAt, ...other } = user;
    res.status(200).json(teacher);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/limit/:id", async (req, res) => {
  try {
    const teacher = await Teacher.find(req.params.id);
    // const { password, updatedAt, ...other } = user;
    res.status(200).json(teacher);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
