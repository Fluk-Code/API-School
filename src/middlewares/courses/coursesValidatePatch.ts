import { Request, Response, NextFunction } from "express";
import { InvalidField } from "../../errors/InvalidField";

export async function coursesValidatePatch(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { description, program } = req.body;

    if (!description?.trim() && !program?.trim()) {
        throw new InvalidField('');
    }

    next();

  };