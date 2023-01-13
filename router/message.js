const dataGuard = require("../middleweres/dataGuard");
const mongoose = require("mongoose");
const Message = require("../models/Message");
const express = require("express");
const router = express.Router();
const upload = require("../middleweres/multer");
// const Comment =require('../models/Comment')
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
    const single = new Message(req.body);
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
      maxCount: 2,
    },
  ]),
  async (req, res) => {
    try {
      const updateMessage = await Message.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateMessage);
    } catch (error) {}
  }
);
//Get Some
router.get("/", async (req, res) => {
  try {
    const result = await Message.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Message.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Message.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json("Message Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
