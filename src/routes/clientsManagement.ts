import express from 'express'
import { UserService } from '../services/user.service'
import { auth } from '../middlewares/auth.middleware'
import { validator } from '../middlewares/validator.middleware'
import { createClientRule, editOrDeleteClientRule } from '../validators/user.validator'

const router = express.Router()
const userServiceInstance = new UserService()

router.use(auth)

router.get('/client/list', async (req,res)=>{  
    try {
        const result = await userServiceInstance.list()
        return res.status(200).send(result)  
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:`Internal Server Error`})
    }
})

router.post('/client/add', validator(createClientRule,'body'), async (req,res)=>{
    const {name,email} = req.body
    try {
        const result = await userServiceInstance.add({name,email})
        return res.status(200).send(result)  
    } catch (error) {
        return res.status(500).send({message:`Internal Server Error`})
    }
})

router.put('/client/:id/edit', validator(editOrDeleteClientRule,'params'),async (req,res)=>{
    const {id} = req.params
    const {name,email} = req.body    
    try {
        const result = await userServiceInstance.update({id,name,email})
        return res.status(200).send(result)  
    } catch (error) {
        return res.status(500).send({message:`Internal Server Error`})
    }
})

router.delete('/client/:id/remove',validator(editOrDeleteClientRule,'params'),async (req,res)=>{
    const {id} = req.params
    try {
        const result = await userServiceInstance.remove({id})
        return res.status(200).send(result)  
    } catch (error) {
        return res.status(500).send({message:`Internal Server Error`})
    }
})

export default router