import jwt from 'jsonwebtoken'
import { UserService } from './user.service'
import { JWT_SECRET,JWT_REF } from '../config/jwt'
import { AuthResponse} from '../types/auth'
import { User } from '../database/entities/user.entity'
import { JWTPayload } from '../types/user'

export class AuthService{
    private userService: UserService

    constructor(){
        this.userService = new UserService()
    }

    async validateUser(email:string,password:string): Promise<User | null>{
        const user = await this.userService.findToAuth({email})
        const isValid = await user?.verifyPassword(password)
        if(!isValid) return null

        return user
    }

    makeToken(instance:User): AuthResponse{
        const response = {id: instance.id, email:instance.email}

        const accessToken = jwt.sign(response, JWT_SECRET,{expiresIn: '1h'})
        const refreshToken = jwt.sign(response, JWT_REF,{expiresIn: '30s'})

        return {accessToken,refreshToken}
    }

    refreshToken(token:string): AuthResponse{
        const verified = jwt.verify(token,JWT_REF) as JWTPayload
        
        const accessToken = jwt.sign({id:verified.id,email:verified.email}, JWT_SECRET,{expiresIn: '1h'})
        const refreshToken = jwt.sign({id:verified.id,email:verified.email}, JWT_REF,{expiresIn: '30s'})

        return {accessToken,refreshToken}
    }
}