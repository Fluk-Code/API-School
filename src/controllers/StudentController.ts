import { parse } from "dotenv";
import {
    Request,
    Response
} from "express";

import { StudentService } from "../services/StudentService";

class StudentController {
    public async post( req: Request, res: Response ) {
        const {
            name
        } = req.body;

        const studentService = new StudentService(); 

        const student = await studentService.create({ name });
        return res.status(201).json(student);
    }

    public async get( req: Request, res: Response ){
        const studentService = new StudentService();

        const students = await studentService.list();

        if(!students) {
            return res.status(204).end();
        }

        return res.status(200).json(students);  
    }

    public async getById( req: Request, res: Response ){
        const studentService = new StudentService();

        const id = parseInt(req.params.id);

        const students = await studentService.listById(id);
        
        if(!students) {
            return res.status(204).end();
        }

        return res.status(200).json(students);  
    }

    public async deleteById( req: Request, res: Response ){
        const studentService = new StudentService();

        const id = parseInt(req.params.id);
        const response = await studentService.deleteById(id);
        
        return res.status(204).end();
    }

    public async putById( req: Request, res: Response ){
        const studentService = new StudentService();

        const id = parseInt(req.params.id);
        const student = req.body;

        const alteredStudent = await studentService.updateById(id, student);

        return res.status(200).json(alteredStudent);

    }
    
};

export { StudentController };