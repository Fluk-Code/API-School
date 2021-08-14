import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourses1628180236866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "courses",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'

                    },{
                        name: "description",
                        type: "varchar(50)"
                    },{
                        name: "program",
                        type: "text"
                    },{
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },{
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("courses");
    }

}
