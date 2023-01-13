const express = require("express");
const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  examtype: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  className: {
    type: Number,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  greade: {
    type: String,
    required: true,
  },
  GPA: {
    type: Number,
    required: true,
  },
  totalMark: {
    type: Number,
    required: true,
  },
  subjectCount: {
    type: Number,
    required: true,
  },
  subjets: {
    type: Object,
    required: true,
  },
});

let Result = mongoose.model("Result", resultSchema);

module.exports = Result;
