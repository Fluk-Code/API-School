import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { Conflict } from "../../errors/Conflict";
import { CourseStudentsRepository } from "../../repositories/CourseStudentsRepository";

export async function coursesAlreadyUsed(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
      
    let id_course = parseInt(req.params.id);
    const courseStudentsRepository = getCustomRepository(CourseStudentsRepository);

    const alreadyUsed = await courseStudentsRepository.findOne({id_course});

    if(alreadyUsed){
        throw new Conflict(`Cannot delete courses '${id_course}' because it has student linked`);
    };

    next();

  };