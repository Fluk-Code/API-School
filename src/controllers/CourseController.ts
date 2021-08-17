import {
    Request,
    Response
} from "express";
import { Course } from "../entities/Course";

import { CourseService } from "../services/CourseService";

class CourseController {
    public async post( req: Request, res: Response ){
        const {
            description,
            program
        } = req.body;

        const courseService = new CourseService(); 

        const course = await courseService.create({ description, program });
        
        return res.status(201).json(course);
    }

    public async get( req: Request, res: Response ){
        const courseService = new CourseService();

        const courses = await courseService.list();

        if(!courses.length) {
            return res.status(204).end();
        }

        return res.status(200).json(courses);  
    }

    public async getById( req: Request, res: Response ){
        const courseService = new CourseService();

        const id = parseInt(req.params.id);

        const course = await courseService.listById(id);

        return res.status(200).json(course); 
    }

    public async deleteById( req: Request, res: Response ){
        const courseService = new CourseService();

        const id = parseInt(req.params.id);
        const response = await courseService.deleteById(id);
        
        return res.status(204).end();
    }

    public async putById( req: Request, res: Response ){
        const courseService = new CourseService();

        const id = parseInt(req.params.id);
        const course = req.body;

        const alteredCourse = await courseService.updateById(id, course);

        return res.status(200).json(alteredCourse);
    }

    public async patchById( req: Request, res: Response ){
        const courseService = new CourseService();

        const id = parseInt(req.params.id);
        const field = req.body;

        const alteredCourse = await courseService.updateById(id, field);

        return res.status(200).json(alteredCourse);
    }
};

export { CourseController };