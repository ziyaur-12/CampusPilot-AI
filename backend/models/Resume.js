import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    filePath: {
      type: String,
      required: true,
    },

    analysis: {
  atsScore: {
    type: Number,
    default: null,
  },

  skills: {
    type: [String],
    default: [],
  },

  missingSkills: {
    type: [String],
    default: [],
  },

  strengths: {
    type: [String],
    default: [],
  },

  suggestions: {
    type: [String],
    default: [],
  },

  analyzedAt: {
    type: Date,
    default: null,
  },
},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resume", resumeSchema);