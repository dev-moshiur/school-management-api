const mongoose = require("mongoose");
const BannerSchema = new mongoose.Schema(
  {
    header: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
    linkName: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Banner", BannerSchema);
