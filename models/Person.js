const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    username: {
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

    className: {
      type: Number,
      require: true,
    },
    group: {
      type: String,
    },
    roll: {
      type: Number,
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

module.exports = mongoose.model("Person", PersonSchema);
