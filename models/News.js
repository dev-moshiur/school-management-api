const mongoose = require("mongoose");
const NewsSchema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },
    likeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },
    dislikeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },
    data: {
      type: String,
      require: true,
    },
    headline: {
      type: String,
      require: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
