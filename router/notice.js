const dataGuard = require("../middleweres/dataGuard");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Notice = require("../models/Notice");
const upload = require("../middleweres/multer");

//cREATE
router.post("/", async (req, res) => {
  const single = new Notice(req.body);
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
    const updateNotice = await Notice.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateNotice);
  } catch (error) {}
});
//Get Some
router.get("/", async (req, res) => {
  try {
    const result = await Notice.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Notice.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/limit/:id", async (req, res) => {
  try {
    const result = await Notice.find().limit(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const result = await Notice.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.status(200).json("Notice Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
