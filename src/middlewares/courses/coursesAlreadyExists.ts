import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { BadRequest } from "../../errors/BadRequest";
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
        throw new BadRequest("students", id);
    };

    next();

  };