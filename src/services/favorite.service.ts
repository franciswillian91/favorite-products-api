import { dbInstance } from "../config/database";
import { UserFavoritedProducts } from "../database/entities/favorite.entity";
import { UserService } from "./user.service";
import { Products } from "../database/entities/product.entity";

export class FavoriteService{
    private userService
    private repository
    private productRepository

    constructor(){
        this.repository = dbInstance.getRepository(UserFavoritedProducts)
        this.userService = new UserService()
        this.productRepository = dbInstance.getRepository(Products)
    }
    
    async favorite(args:{email:string,product:string}){    

        const userExists = await this.userService.findToValidate({email:args.email})
        const productExists = await this.productRepository.findBy({id: args.product})
        
        if(!userExists || (!productExists || productExists.length < 1)) return {message:`Unable to find user or product`}

        const isFavorited = await this.repository.findBy({user_id:userExists.id,product_ref_id:args.product})

        if(isFavorited && isFavorited.length > 0) return {message:`This product is already favorited by this user.`}
        
        const favorited = await this.repository.insert({user_id:userExists.id,product_ref_id:args.product})

        return favorited.raw?.shift()
    }

    async unfavorite(args:{email:string,product:string}){        
        const userExists = await this.userService.findToValidate({email:args.email})
        const productExists = await this.productRepository.findBy({id: args.product})
        
        if(!userExists || (!productExists || productExists.length < 1)) return {message:`Unable to find user or product`}

        const isFavorited = await this.repository.findBy({user_id:userExists.id,product_ref_id:args.product})

        if(!isFavorited || isFavorited.length < 1) return {message:`This product is not favorited by this user.`}

        const item = isFavorited.shift()
        
        const unfavorited = await this.repository.delete({id:item?.id})

        return unfavorited.affected === 1 ? {message:"done"} : {message:"unchanged"}
    }

    async listFavoritedProducts(args:{email:string}){        
        const userExists = await this.userService.findToValidate({email:args.email})
        
        if(!userExists) return {message:`Unable to find user`}

        // Utilizei RAW Query porque a minha configuração de entidade para relacionamento
        // não estava funcionando e não podia mais perder tempo nesta função
        const favorited = await dbInstance.createQueryRunner().query(`
            SELECT 
                ufp.id,
                ufp.created_at as favorited_at,
                p.product_id, 
                p.product_title,
                p.product_price,
                p.product_image_ref,
                p.product_rating,
                p.product_rating_count
            FROM "user_favorited_products" ufp
            LEFT JOIN products p ON CAST(p.id AS VARCHAR) = ufp.product_ref_id
            WHERE ufp.user_id = $1
        `,[userExists.id])

        if(!favorited || favorited.length < 1) return {message:`This user has not added any products to their favorites yet`}

        return favorited
    }

    async listProducts(){        
        const products = await this.productRepository.find()
        if(!products || products.length < 1) return {message:`Fail to load products`}

        return products
    }
}