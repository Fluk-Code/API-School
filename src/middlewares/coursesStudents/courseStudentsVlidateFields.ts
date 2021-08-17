import { getCustomRepository } from 'typeorm';
import { Request, Response, NextFunction } from "express";
import { StudentRepository } from '../../repositories/StudentRepository';
import { CourseRepository } from '../../repositories/CourseRepository';
import { RequiredField } from '../../errors/RequiredField';
import { NotFound } from '../../errors/NotFound';

export async function courseStudentsVlidateFields(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
      const { id_student } = req.body;
      const id_course = req.params.id

      if(!id_student){
          throw new RequiredField("id_student");
      }

      const studentRepository = getCustomRepository(StudentRepository);
      const studentExists = await studentRepository.findOne(id_student);
      
      if(!studentExists){
          throw new NotFound("student",id_student);
      };
      
      const courseRepository = getCustomRepository(CourseRepository);
      const courseExists = await courseRepository.findOne(id_course);

      if(!courseExists){
          throw new NotFound("course",id_course);
      };

    next();

  };