require('dotenv').config();
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import "./database";

const app = express();
const PORT = process.env.APP_PORT;

app.use(express.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
  

import { courseRouters } from "./routes/courseRouters";
app.use( courseRouters );

import { studentRouters } from "./routes/studentRouters";
app.use( studentRouters );


import { courseStudentsRouters } from "./routes/courseStudents";
app.use( courseStudentsRouters );


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if( err instanceof Error && err.name === "Conflict" ) {
        return res.status(409).json({
            message: err.message
        })
    }

    if( err instanceof Error && err.name === "NotFound" ) {
        return res.status(404).json({
            message: err.message
        })
    }

    if( err instanceof Error && err.name === "BadRequest" ) {
        return res.status(400).json({
            message: err.message
        })
    }

    if( err instanceof Error && err.name === "InvalidField" ) {
        return res.status(400).json({
            message: err.message
        })
    }

    return res.status(500).json({
        error: err.message
    })
});

app.listen(PORT, () => console.log(`Online server on port ${PORT}`));