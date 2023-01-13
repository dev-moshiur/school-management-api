const dataGuard = require("../middleweres/dataGuard");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const News = require("../models/News");
const upload = require("../middleweres/multer");
//cREATE
router.post("/", async (req, res) => {
  const single = new News(req.body);
  try {
    let saved = await single.save();

    res.status(200).json(saved);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const updateNews = await News.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateNews);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get Some
router.get("/", async (req, res) => {
  try {
    const result = await News.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const result = await News.find().sort({ createdAt: "ascending" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await News.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json("News Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;

// router.put("/:id/like",dataGuard, async (req, res) => {

//       try {

//         if (!user.followers.includes(req.body.userId)) {
//           await user.updateOne({ $push: { followers: req.body.userId } });
//           await currentUser.updateOne({ $push: { followings: req.params.id } });
//           res.status(200).json("user has been followed");
//         } else {
//           res.status(403).json("you allready follow this user");
//         }
//       } catch (err) {
//         res.status(500).json(err);
//       }

//   });
