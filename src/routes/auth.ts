import express from 'express'
import { AuthService } from '../services/auth.service'
import { validator } from '../middlewares/validator.middleware'
import { loginRule, refreshTokenRule } from '../validators/auth.validator'

const router = express.Router()
const authenticator = new AuthService()

router.post('/login', validator(loginRule,'body'), async (req,res)=>{
    const {email,password} = req.body
    try {
        const authenticated = await authenticator.validateUser(email,password)

        if(!authenticated) return res.status(401).send({message:`Invalid Credentials`})

        const token = authenticator.makeToken(authenticated)
        return res.status(200).send(token)
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:`Internal Server Error`})
    }
})

router.post('/refresh-token', validator(refreshTokenRule,'body'),async (req,res)=>{
    const {refreshToken} = req.body
    try {
        const newToken = authenticator.refreshToken(refreshToken)

        if(!newToken) return res.status(401).send({message:`Invalid Token provided`})

        return res.status(200).send(newToken)
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:`Internal Server Error`})
    }
})

export default router