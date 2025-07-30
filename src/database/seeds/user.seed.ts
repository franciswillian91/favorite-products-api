import 'reflect-metadata'
import { dbInstance } from '../../config/database'
import { User } from '../entities/user.entity'
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcryptjs'

const seed = async () =>{
    try {
        if(!dbInstance.isInitialized){
            await dbInstance.initialize()
        }

        const repository = dbInstance.getRepository(User)
        const password = await bcrypt.hash('senha##12_',10)
        const data = [
            {
                id: uuid(),
                name: 'Admin',
                email: 'admin@avaliacao.com',
                password: password,
                admin: true,
            }
        ]

        await repository.insert(data)

    } catch (error) {
        console.log('Error while seeding: ',error)
    }
}

seed()