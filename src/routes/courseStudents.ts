import { Router } from "express";
import { CourseStundentsController } from "../controllers/CourseStundentsController";
import { coursesAlreadyExists } from "../middlewares/courses/coursesAlreadyExists";
import { studentsByCoursesAlreadyExists } from "../middlewares/coursesStudents/studentsByCoursesAlreadyExists";

import { studentsByCoursesValidateFields } from "../middlewares/coursesStudents/studentsByCoursesValidateFields";
import { studentAlreadyExists } from "../middlewares/student/studentAlreadyExists";

const courseStudentsRouters = Router();
const courseStundentsController = new CourseStundentsController();

courseStudentsRouters.post("/courses/:id/enroll", studentsByCoursesValidateFields, studentsByCoursesAlreadyExists, courseStundentsController.enrollStudentsById);
courseStudentsRouters.delete("/courses/:id/unenroll", studentsByCoursesValidateFields, courseStundentsController.unenrollStudentsById);

courseStudentsRouters.get("/students/:id/courses", studentAlreadyExists, courseStundentsController.getCourseByStudents);
courseStudentsRouters.get("/courses/:id/students", coursesAlreadyExists, courseStundentsController.getStudentByCourses);


export { courseStudentsRouters };