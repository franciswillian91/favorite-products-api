import { MigrationInterface, QueryRunner, Table } from "typeorm";

const table = 'products'
export class Products1753837162488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: table,
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                        generationStrategy:"uuid",
                        default: "uuid_generate_v4()",
                        isNullable:false,
                        isUnique:true,
                    },
                    {
                        name:"product_id",
                        type:"int",
                        isNullable:false
                    },
                    {
                        name:"product_title",
                        type:"varchar(400)",
                        isNullable:false
                    },
                    {
                        name:"product_price",
                        type:"double precision",
                        isNullable:false
                    },
                    {
                        name:"product_image_ref",
                        type:"varchar(600)",
                        isNullable:true
                    },
                    {
                        name:"product_rating",
                        type:"double precision",
                        isNullable:true
                    },
                    {
                        name:"product_rating_count",
                        type:"int",
                        isNullable:true
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default: "now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default: "now()"
                    },
                    {
                        name:"deleted_at",
                        type:"timestamp"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(table)
    }

}
