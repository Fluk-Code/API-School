import { Router } from "express";
import { CourseController } from "../controllers/CourseController";
import { coursesAlreadyExists } from "../middlewares/courses/coursesAlreadyExists";
import { coursesAlreadyUsed } from "../middlewares/courses/coursesAlreadyUsed";
import { coursesValidateFields } from "../middlewares/courses/coursesValidateFields";
import { coursesValidatePatch } from "../middlewares/courses/coursesValidatePatch";


const courseRouters = Router();
const courseController = new CourseController();

courseRouters.post("/courses", coursesValidateFields, courseController.post);
courseRouters.get("/courses", courseController.get);
courseRouters.get("/courses/:id", coursesAlreadyExists, courseController.getById);

courseRouters.put("/courses/:id", coursesAlreadyExists, coursesValidateFields, courseController.putById);
courseRouters.patch("/courses/:id", coursesAlreadyExists, coursesValidatePatch ,courseController.patchById);

courseRouters.delete("/courses/:id", coursesAlreadyExists, coursesAlreadyUsed, courseController.deleteById);

export { courseRouters };