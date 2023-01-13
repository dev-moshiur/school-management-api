const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
    },
    img: {
      type: String,
    },
    phone: {
      type: Number,
      require: true,
    },

    qualification: {
      type: String,
      require: true,
    },
    post: {
      type: String,
      require: true,
    },
    joinDate: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      defult: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
