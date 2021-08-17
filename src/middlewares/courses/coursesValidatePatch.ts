import { Request, Response, NextFunction } from "express";
import { RequiredField } from "../../errors/RequiredField";

export async function coursesValidatePatch(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { description, program } = req.body;

    if (!description?.trim() && !program?.trim()) {
        throw new RequiredField('');
    }

    next();

  };