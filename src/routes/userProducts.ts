import express from 'express'
import { FavoriteService } from '../services/favorite.service'
import { validator } from '../middlewares/validator.middleware'
import { favoriteProductRule, listFavoriteRule } from '../validators/favorite_product.validator'

const router = express.Router()
const favoriteService = new FavoriteService()

router.get('/list',async (req,res)=>{
    try {
        const result = await favoriteService.listProducts()
        return res.status(200).send(result)  
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:`Internal Server Error`})
    }
})

router.post('/favorite', validator(favoriteProductRule,'body'),async (req,res)=>{
    const {email, product} = req.body
    try {
        const result = await favoriteService.favorite({email,product})
        return res.status(200).send(result)  
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:`Internal Server Error`})
    }
})

router.post('/unfavorite',validator(favoriteProductRule,'body'),async (req,res)=>{
    const {email, product} = req.body
    try {
        const result = await favoriteService.unfavorite({email,product})
        return res.status(200).send(result)  
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:`Internal Server Error`})
    }
})

router.post('/my-favorite',validator(listFavoriteRule,'body'),async (req,res)=>{
    const {email} = req.body
    try {
        const result = await favoriteService.listFavoritedProducts({email})
        return res.status(200).send(result)  
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:`Internal Server Error`})
    }
})

export default router