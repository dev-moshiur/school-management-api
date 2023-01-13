const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Opinion = require("../models/Opinion");
//cREATE
router.post("/", async (req, res) => {
  const single = new Opinion(req.body);
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
    const updateOpinion = await Opinion.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateOpinion);
  } catch (error) {}
});
//Get Some
router.get("/", async (req, res) => {
  try {
    const result = await Opinion.find({ ...req.query });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const result = await Opinion.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one
router.get("/:id", async (req, res) => {
  try {
    const result = await Opinion.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    await Opinion.findByIdAndDelete(req.params.id);
    res.status(200).json("Opinion Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
