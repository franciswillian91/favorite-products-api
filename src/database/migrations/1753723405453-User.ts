import { MigrationInterface, QueryRunner, Table } from "typeorm";

const table = "users"
export class User1753723405453 implements MigrationInterface {

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
                        name:"email",
                        type:"varchar(100)",
                        isUnique:true,
                        isNullable:false
                    },
                    {
                        name:"password",
                        type:"varchar(200)"
                    },
                    {
                        name:"name",
                        type:"varchar(200)"
                    },
                    {
                        name:"admin",
                        type:"boolean",
                        default: false
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
