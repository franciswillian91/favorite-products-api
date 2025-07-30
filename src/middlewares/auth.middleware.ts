import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { JWTPayload } from "../types/user";
import { JWT_SECRET } from "../config/jwt";

export const auth =(req:Request,res:Response,next:NextFunction)=>{
    const requestToken = req.headers['authorization']?.split(' ')[1]

    if(!requestToken) return res.status(401).send({message:'Authorization is missing.'})

    jwt.verify(requestToken,JWT_SECRET,(err: any,user: any)=>{
        if(err) return res.status(401).send({message:'Invalid token'})
        
        req.user = user as JWTPayload
        next()
    })
}