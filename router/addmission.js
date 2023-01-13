const dataGuard = require("../middleweres/dataGuard");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Addmission = require("../models/Addmission");
const upload = require("../middleweres/multer");
//cREATE
router.post(
  "/",
  upload.fields([
    {
      name: "profile",
      maxCount: 2,
    },
  ]),
  async (req, res) => {
    const single = new Addmission(req.body);
    try {
      let saved = await single.save();

      res.status(200).json(saved);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

//Update
router.put(
  "/:id",
  upload.fields([
    {
      name: "profile",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    try {
      const updateAddmission = await Addmission.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateAddmission);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);
//Get Some
router.get("/", async (req, res) => {
  try {
    const result = await Addmission.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Addmission.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Addmission.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Addmission.findByIdAndDelete(req.params.id);
    res.status(200).json("Addmission Has Been Deleted");
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
