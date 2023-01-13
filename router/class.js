const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Classes = require("../models/Class");
//cREATE
router.post("/", async (req, res) => {
  const single = new Classes(req.body);
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
    const updateClasses = await Classes.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateClasses);
  } catch (error) {}
});
//Get Some
router.get("/", async (req, res) => {
  try {
    const result = await Classes.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Classes.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Classes.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Classes.findByIdAndDelete(req.params.id);
    res.status(200).json("Classes Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
