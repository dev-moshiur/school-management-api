const mongoose = require("mongoose");
const ClassSchema = new mongoose.Schema(
  {
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },
    className: {
      type: String,
      require: true,
    },
    group: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Classes", ClassSchema);
