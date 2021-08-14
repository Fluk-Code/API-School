import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { Conflict } from "../../errors/Conflict";
import { CourseStudentsRepository } from "../../repositories/CourseStudentsRepository";

export async function studentAlreadyUsed(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
      
    let id_student = parseInt(req.params.id);
    const courseStudentsRepository = getCustomRepository(CourseStudentsRepository);

    const alreadyUsed = await courseStudentsRepository.findOne({id_student});

    if(alreadyUsed){
        throw new Conflict(`Cannot delete student '${id_student}' because it has courses linked`);
    };

    next();

  };