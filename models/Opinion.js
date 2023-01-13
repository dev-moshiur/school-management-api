const mongoose = require("mongoose");

const OpinionSchema = new mongoose.Schema(
  {
    reporterId: {
      type: String,
      require: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    massage: {
      type: String,
      require: true,
    },

    type: {
      type: String,
      default: "genarel",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Opinion", OpinionSchema);
