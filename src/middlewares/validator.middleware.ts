import { Request,Response,NextFunction, RequestHandler } from "express";
import Joi from 'joi'

export const validator = (schema:Joi.Schema,prop: 'body'|'params'|'query'):RequestHandler=>{
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[prop]);

        if (error) return res.status(400).send({ message: error.details[0].message });

        next();
    };
}