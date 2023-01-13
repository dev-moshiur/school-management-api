const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();
const Result = require("../models/singleResult");

//CREATE

router.post("/", async (req, res) => {
  const single = new Result(req.body);
  try {
    let saved = await single.save();

    res.status(200).json(saved);
    // Result.deleteMany({studentName:'Md Moshiur Rahman Masud'})
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updateResult = await Result.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateResult);
  } catch (error) {}
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Result.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET SOME OR ONE

router.get("/:id", async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
router.get("/", async (req, res) => {
  try {
    const reau = await Result.find({ ...req.query });
    res.status(200).json(reau);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
