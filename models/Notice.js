const mongoose = require("mongoose");
const NoticeSchema = new mongoose.Schema(
  {
    // creatorId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post'
    // },
    headline: {
      type: String,
      require: true,
    },
    img: {
      type: String,
    },
    type: {
      type: String,
      default: "Genarel",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", NoticeSchema);
