import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { NotFound } from "../../errors/NotFound";
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
        throw new NotFound("students", id);
    };

    next();

  };