const dataGuard = require("../middleweres/dataGuard");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Info = require("../models/Info");
//REATE
router.post("/", dataGuard, async (req, res) => {
  const single = new Info(req.body);
  try {
    let saved = await single.save();

    res.status(200).json(saved);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update
router.put("/:id", dataGuard, async (req, res) => {
  try {
    const updateInfo = await Info.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateInfo);
  } catch (error) {}
});
//Get Some
router.get("/", async (req, res) => {
  try {
    const result = await Info.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Info.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Info.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", dataGuard, async (req, res) => {
  try {
    await Info.findByIdAndDelete(req.params.id);
    res.status(200).json("Info Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
