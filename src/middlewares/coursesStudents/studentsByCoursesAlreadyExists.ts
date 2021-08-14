import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { Conflict } from "../../errors/Conflict";
import { CourseStudentsRepository } from "../../repositories/CourseStudentsRepository";

export async function studentsByCoursesAlreadyExists(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id_student } = req.body;
    const id_course = parseInt(req.params.id)
    
    const studentsByCoursesRepository = getCustomRepository(CourseStudentsRepository);

    const alreadyExists = await studentsByCoursesRepository.findOne({id_student, id_course});
    
    if(alreadyExists){
        throw new Conflict('This student is already enrolled in the course');
    };
    
    next();

  };