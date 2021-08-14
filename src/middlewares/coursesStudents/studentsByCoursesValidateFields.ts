import { getCustomRepository } from 'typeorm';
import { Request, Response, NextFunction } from "express";
import { InvalidField } from "../../errors/InvalidField";
import { StudentRepository } from '../../repositories/StudentRepository';
import { BadRequest } from '../../errors/BadRequest';
import { CourseRepository } from '../../repositories/CourseRepository';
import { NotFound } from '../../errors/NotFound';

export async function studentsByCoursesValidateFields(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
      const { id_student } = req.body;
      const id_course = req.params.id

      if(!id_student){
          throw new InvalidField("id_student");
      }

      const studentRepository = getCustomRepository(StudentRepository);
      const studentExists = await studentRepository.findOne(id_student);
      
      if(!studentExists){
          throw new BadRequest("student",id_student);
      };
      
      const courseRepository = getCustomRepository(CourseRepository);
      const courseExists = await courseRepository.findOne(id_course);

      if(!courseExists){
          throw new BadRequest("course",id_course);
      };

    next();

  };