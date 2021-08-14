import { Request, Response, NextFunction } from "express";
import { InvalidField } from "../../errors/InvalidField";

export async function studentValidateFields(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { name } = req.body;

    if (!name?.trim()) {
        throw new InvalidField('name');
    }

    next();

  };