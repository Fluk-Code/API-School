import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { NotFound } from "../../errors/NotFound";
import { CourseRepository } from "../../repositories/CourseRepository";

export async function coursesAlreadyExists(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
      
    let id = req.params.id;

    const coursesRepository = getCustomRepository(CourseRepository);

    const coursesAlreadyExists = await coursesRepository.findOne(id);

    if(!coursesAlreadyExists){
        throw new NotFound("courses", id);
    };

    next();

  };