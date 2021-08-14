import {
    Request,
    Response
} from "express";
import { CourseStudentsService } from "../services/CourseStudentsService";

class CourseStundentsController {

    public async enrollStudentsById( req: Request, res: Response ){
        
        const courseStudentsService = new CourseStudentsService();
        const { id_student } = req.body;
        const id_course = parseInt(req.params.id) 

        const studentsByCourses = await courseStudentsService.create({ id_student, id_course });
        return res.status(201).json(studentsByCourses);
    }

    public async getCourseByStudents( req: Request, res: Response ) {
        const courseStudentsService = new CourseStudentsService();
        const id_student = parseInt(req.params.id)

        const listStudentByCourses = await courseStudentsService.listStudentByCourses(id_student);

        if(!listStudentByCourses.length) {
            return res.status(204).end();
        }

        return res.status(200).json(listStudentByCourses);  
    }

    public async getStudentByCourses( req: Request, res: Response ) {
        const courseStudentsService = new CourseStudentsService();
        const id_course = parseInt(req.params.id)

        const listCourseByStudents = await courseStudentsService.listCoursesByStudents(id_course);

        if(!listCourseByStudents.length) {
            return res.status(204).end();
        }

        return res.status(200).json(listCourseByStudents); 
    }

    public async unenrollStudentsById( req: Request, res: Response ){
        const studentService = new CourseStudentsService();

        const id_course = parseInt(req.params.id);
        const { id_student } = req.body;

        const response = await studentService.deleteById({ id_student, id_course});
        
        return res.status(204).end();
    }
};

export { CourseStundentsController };