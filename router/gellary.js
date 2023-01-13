const dataGuard = require("../middleweres/dataGuard");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Gellary = require("../models/Gelllary");
const upload = require("../middleweres/multer");
//cREATE
router.post("/", async (req, res) => {
  const single = new Gellary(req.body);
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
    const updateGellary = await Gellary.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateGellary);
  } catch (error) {}
});
//Get Some
router.get("/", async (req, res) => {
  try {
    const result = await Gellary.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Gellary.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Gellary.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Gellary.findByIdAndDelete(req.params.id);
    res.status(200).json("Gellary Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
