const mongoose = require("mongoose");

const GellarySchema = new mongoose.Schema(
  {
    //   creatorId: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gellary", GellarySchema);
