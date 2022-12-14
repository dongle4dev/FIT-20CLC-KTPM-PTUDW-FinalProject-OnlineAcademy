import mongoose from "mongoose";

const CourseCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide course category name"],
      trim: true,
      unique: true,
    },
    languageList: {
      type: Array,
      default: [],
      ref: "CourseLanguage",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, 'Please provide user']
    },
    image: {
      type: String,
    }
  },
  { timestamps: true }
); // timestamps -> key createdAt, updatedAt

export default mongoose.model("CourseCategory", CourseCategorySchema);
