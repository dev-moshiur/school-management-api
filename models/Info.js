const mongoose = require("mongoose");
const InfoSchema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },

    data: {
      type: String,
      require: true,
    },
    img: {
      type: [String],
    },
    type: {
      type: String,
      default: "genarel",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Info", InfoSchema);
