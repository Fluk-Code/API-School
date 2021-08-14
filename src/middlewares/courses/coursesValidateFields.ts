import { Request, Response, NextFunction } from "express";
import { InvalidField } from "../../errors/InvalidField";

export async function coursesValidateFields(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { description, program } = req.body;

    if (!description?.trim()) {
        throw new InvalidField('description');
    }
    
    if (!program?.trim()) {
        throw new InvalidField('program');
    }

    next();

  };