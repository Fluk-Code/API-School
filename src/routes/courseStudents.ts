import { Router } from "express";
import { CourseStundentsController } from "../controllers/CourseStundentsController";
import { coursesAlreadyExists } from "../middlewares/courses/coursesAlreadyExists";
import { courseStudentsVlidateFields } from "../middlewares/coursesStudents/courseStudentsVlidateFields";
import { studentsByCoursesAlreadyExists } from "../middlewares/coursesStudents/studentsByCoursesAlreadyExists";

import { studentAlreadyExists } from "../middlewares/student/studentAlreadyExists";

const courseStudentsRouters = Router();
const courseStundentsController = new CourseStundentsController();

courseStudentsRouters.post("/courses/:id/enroll", courseStudentsVlidateFields, studentsByCoursesAlreadyExists, courseStundentsController.enrollStudentsById);
courseStudentsRouters.delete("/courses/:id/unenroll", courseStudentsVlidateFields, courseStundentsController.unenrollStudentsById);

courseStudentsRouters.get("/students/:id/courses", studentAlreadyExists, courseStundentsController.getCourseByStudents);
courseStudentsRouters.get("/courses/:id/students", coursesAlreadyExists, courseStundentsController.getStudentByCourses);


export { courseStudentsRouters };