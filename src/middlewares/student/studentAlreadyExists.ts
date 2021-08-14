import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { BadRequest } from "../../errors/BadRequest";
import { StudentRepository } from "../../repositories/StudentRepository";

export async function studentAlreadyExists(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
      
    const id = req.params.id;

    const studentRepository = getCustomRepository(StudentRepository);

    const studentAlreadyExists = await studentRepository.findOne(id);

    if(!studentAlreadyExists){
        throw new BadRequest("students", id);
    };

    next();

  };