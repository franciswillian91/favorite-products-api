import { Request } from "express";
import { JWTPayload } from "./user";
import { JwtPayload } from "jsonwebtoken";

declare global{
    namespace Express{
        interface Request{
            user?: JwtPayload
        }
    }
}

export interface AuthResponse{
    accessToken: string
    refreshToken: string
}