const mongoose = require("mongoose");

const AddmissionSchema = new mongoose.Schema(
  {
    applicantName: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },

    PECRoll: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    preInstitute: {
      type: String,
      require: true,
    },
    GPA: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Addmission", AddmissionSchema);
