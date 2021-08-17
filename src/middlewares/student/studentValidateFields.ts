import { Request, Response, NextFunction } from "express";
import { MaxLengthField } from "../../errors/MaxLengthField";
import { RequiredField } from "../../errors/RequiredField";

export async function studentValidateFields(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { name } = req.body;

    if (!name?.trim()) {
        throw new RequiredField('name');
    }

    if (name.trim().length > 50) {
      throw new MaxLengthField('name',50);
    }

    next();

  };