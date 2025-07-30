import { MigrationInterface, QueryRunner,Table } from "typeorm";

const table = "user_favorited_products"
export class FavoritedProducts1753724694654 implements MigrationInterface {

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
                                name:"user_id",
                                type:"varchar(200)",
                                isNullable:false
                            },
                            {
                                name:"product_ref_id",
                                type:"varchar(100)",
                                isNullable:false
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
                        ],
                        foreignKeys: [
                            {
                                name: "user",
                                referencedTableName: "users",
                                referencedColumnNames: ["id"],
                                columnNames: ["user_id"],
                                onDelete: "CASCADE",
                                onUpdate: "CASCADE"
                            },
                            {
                                name: "products",
                                referencedTableName: "products",
                                referencedColumnNames: ["product_id"],
                                columnNames: ["product_ref_id"],
                                onDelete: "CASCADE",
                                onUpdate: "CASCADE"
                            }
                        ]
                    })
                )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(table)
    }

}
