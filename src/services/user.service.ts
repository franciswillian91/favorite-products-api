import { InsertResult, UpdateResult } from "typeorm";
import { dbInstance } from "../config/database";
import { User } from "../database/entities/user.entity";

export interface AddUserArgumentsInterface{
    email: string
    name: string
}

export interface UpdateUserArgumentsInterface{
    id: string
    email?: string
    name?: string
}

export interface RemoveUserArgumentsInterface{
    id: string
}

export interface FailMessage{
    message:string
}

export class UserService{
    private repository

    constructor(){
        this.repository = dbInstance.getRepository(User)
    }
    
    async list():Promise<User[] | []>{        
        return await this.repository.find({select:['id','name','email','created_at','updated_at'], withDeleted:false})
    }

    async add(args:AddUserArgumentsInterface):Promise<InsertResult | FailMessage>{
        const exists = await this.repository.find({where:{email:args.email}, withDeleted:true})
        
        if(exists && exists.length > 0) {
            const record = exists.shift()

            if(!record?.deleted_at) return {message:`Client has been already registered.`}
            
            // optei por remover um cliente em soft delete
            // para que possa liberar o cadastro do email novamente
            await this.repository.delete({id:record.id})
        }            

        const result = await this.repository.insert(args)
        return result.raw?.shift()
    }

    async update(args:UpdateUserArgumentsInterface):Promise<UpdateResult | FailMessage>{
        const exists = await this.repository.findBy({id:args.id})

        if(!exists || exists.length < 1) return {message:`The provided client not exists.`}

        return await this.repository.update({id:args.id},{...args,updated_at:new Date()})
    }

    async remove(args:RemoveUserArgumentsInterface):Promise<UpdateResult | FailMessage>{
        const exists = await this.repository.findBy({id:args.id})

        if(!exists || exists.length < 1) return {message:`The provided client not exists.`}

        return await this.repository.update({id:args.id},{...args,updated_at:new Date(), deleted_at: new Date()})
    }

    async findToAuth(args:{email:string}): Promise<User | null>{
        if(!args) return null

        return this.repository.findOne({
            where:{email:args.email},
            select:['id','name','email','password']
        })
    }

    async findToValidate(args:{email:string}): Promise<User | null>{
        if(!args) return null

        return this.repository.findOne({
            where:{email:args.email},
            select:['id','name','email']
        })
    }

}