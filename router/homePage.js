const dataGuard = require("../middleweres/dataGuard");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const upload = require("../middleweres/multer");
const Teacher = require("../models/Teacher");
const Notice = require("../models/Notice");
const News = require("../models/News");
const Gellary = require("../models/Gelllary");
const Banner = require("../models/Banner");

//Get All
router.get("/", async (req, res) => {
  try {
    const headTeacher = await Teacher.find({ post: "head" });
    const teacher = await Teacher.find({ post: "assistant" }).limit(4);
    const notice = await Notice.find().limit(2);
    const news = await News.find().limit(4);
    const gellary = await Gellary.find().limit(5);
    const banner = await Banner.find();
    res.status(200).json({ headTeacher, teacher, notice, news, gellary,banner });
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get one

//delete

module.exports = router;
