import express from "express";
const studentRouter = express.Router();

import {
  getProfile,
  getPhoto,
  getAccountSecurity,
  getCourseList,
  getCourseFavorite,
  updateProfile,
  updatePassword,
  changeEmail,
} from "../controllers/student.controller";

studentRouter.route("/").get(getProfile);
studentRouter.route("/photo").get(getPhoto);
studentRouter
  .route("/account_security")
  .get(getAccountSecurity)
  .post(updatePassword);
studentRouter.route("/course_learn").get(getCourseList);
studentRouter.route("/favorite_course").get(getCourseFavorite);
studentRouter.route("/update_profile/post").post(updateProfile);
studentRouter.route("/change_email/post").post(changeEmail);
// studentRouter.route("/updateprofile").post(updateProfile);
// studentRouter
//   .route("/courses/:courseId")
//   .patch(updateStatusCourse)
//   .post(addCourse);
// studentRouter.route("/courses/delete/:courseId").patch(removeCourse);

export default studentRouter;
