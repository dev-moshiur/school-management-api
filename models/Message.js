const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema(
  {
    // creatorId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post'
    // },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
