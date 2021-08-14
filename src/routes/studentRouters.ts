import { Router } from "express";
import { StudentController } from "../controllers/StudentController";
import { studentAlreadyExists } from "../middlewares/student/studentAlreadyExists";
import { studentAlreadyUsed } from "../middlewares/student/studentAlreadyUsed";
import { studentValidateFields } from "../middlewares/student/studentValidateFields";

const studentRouters = Router();
const studentController = new StudentController();

studentRouters.post("/students", studentValidateFields , studentController.post);
studentRouters.get("/students", studentController.get);
studentRouters.get("/students/:id", studentAlreadyExists, studentController.getById);

studentRouters.put("/students/:id", studentAlreadyExists, studentValidateFields, studentController.putById);

studentRouters.delete("/students/:id", studentAlreadyExists, studentAlreadyUsed, studentController.deleteById);

export { studentRouters };