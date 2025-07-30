import { Entity,Column, CreateDateColumn, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne,JoinTable, OneToMany } from "typeorm";
import { UserFavoritedProducts } from "./favorite.entity";


@Entity('products')
export class Products{
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column({ type: "int", nullable:false, unique:true })
    product_id!: number;

    @Column({ type: "varchar", length: 400, nullable:false })
    product_title!: string;

    @Column({ type: "double precision", nullable:false })
    product_price!: number;

    @Column({ type: "varchar", nullable:true })
    product_image_ref?: string;

    @Column({ type: "double precision", nullable:true })
    product_rating?: number;

    @Column({ type: "int", nullable:true })
    product_rating_count?: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' })
    created_at!: Date;
    
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' })
    updated_at!: Date;
    
    @DeleteDateColumn({ type: 'timestamp', default: null })
    deleted_at?: Date;

    @OneToMany(() => UserFavoritedProducts, (user_favorited_products) => user_favorited_products.product)
    user_favorited_products?: UserFavoritedProducts[]
}
