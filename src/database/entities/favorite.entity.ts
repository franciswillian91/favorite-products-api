import { Entity,Column, CreateDateColumn, PrimaryGeneratedColumn, DeleteDateColumn, OneToMany,JoinTable, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Products } from "./product.entity";


@Entity('user_favorited_products')
export class UserFavoritedProducts{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: "varchar", length: 100, nullable:false})
    user_id!: string;
    
    @Column({ type: "varchar", nullable:false })
    product_ref_id!: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' })
    created_at!: Date;
    
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' })
    updated_at!: Date;
    
    @DeleteDateColumn({ type: 'timestamp', default: null })
    deleted_at?: Date;
    
    @ManyToOne(() => Products,(products)=> products.user_favorited_products)
    product?: Products
}
