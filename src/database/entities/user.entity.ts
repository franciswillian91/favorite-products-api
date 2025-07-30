import { Entity,PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, PrimaryGeneratedColumn, DeleteDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import bcrypt from 'bcryptjs'

@Entity('users')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: "varchar", length: 100 })
    name?: string;
    
    @Column({ type: "varchar", length: 100, unique: true })
    email!: string;

    @Column({ type: "varchar",nullable:true })
    password?: string;

    @Column({ type: "boolean", default: false})
    admin!: boolean;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' })
    created_at!: Date;
    
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' })
    updated_at!: Date;
    
    @DeleteDateColumn({ type: 'timestamp', default: null })
    deleted_at?: Date;

    @BeforeInsert()
    generateId(){
        if(!this.id){
            this.id = uuid()
        }
    }

    @BeforeInsert()
    @BeforeUpdate()
    async passwordHash(){
        if(this.password){
            this.password = await bcrypt.hash(this.password,10)
        }
    }

    async verifyPassword(pass: string): Promise<boolean>{
        if(this.password){
            return await bcrypt.compare(pass, this.password)
        }
        return false
    }
}
