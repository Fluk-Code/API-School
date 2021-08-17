import { Request, Response, NextFunction } from "express";
import { MaxLengthField } from "../../errors/MaxLengthField";
import { RequiredField } from "../../errors/RequiredField";

export async function coursesValidateFields(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { description, program } = req.body;

    if (!description?.trim()) {
        throw new RequiredField('description');
    }
    
    if (!program?.trim()) {
        throw new RequiredField('program');
    }

    if (description.trim().length > 50) {
      throw new MaxLengthField('description', 50);
    }

    if (program.trim().length > 50) {
      throw new MaxLengthField('program', 50);
    }

    next();

  };