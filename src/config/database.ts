import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '../database/entities/user.entity'
import { UserFavoritedProducts } from '../database/entities/favorite.entity'
import { Products } from '../database/entities/product.entity'

const connectionOptions = {
    type:'postgres',
    username:process.env.DATABASE_USER || 'dbadm',
    password:process.env.DATABASE_PASSWORD || 'SWi9~V#4J!j3',
    host:process.env.DATABASE_HOST || 'db',
    database:process.env.DATABASE_NAME || 'avaliacaodb',
    port:Number(process.env.DATABASE_PORT) || 5432,
    entities:[User,Products,UserFavoritedProducts],
    migrations:['dist/database/migrations/*{.ts,.js}'],
    synchronize:true
}
export const dbInstance = new DataSource(connectionOptions as any)