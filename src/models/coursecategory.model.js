import mongoose from "mongoose";

const CourseCategorySchema = new mongoose.Schema(
  {
    //required: name, typeOf, price
    name: {
      type: String,
      required: [true, "Please provide course category name"],
      maxlength: 50,
      trim: true,
      unique: true,
    },
    courseList: {
      type: Array,
      default: [],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      // required: [true, 'Please provide user']
    },
  },
  { timestamps: true }
); // timestamps -> key createdAt, updatedAt

export default mongoose.model("CourseCategory", CourseCategorySchema);