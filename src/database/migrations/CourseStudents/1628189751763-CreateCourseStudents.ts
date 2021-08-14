import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourseStudents1628189751763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {await queryRunner.createTable(
        new Table({
            name: "course_students",
            columns: [
                {
                    name: "id_student",
                    type: "int",
                    isPrimary: true
                },{
                    name: "id_course",
                    type: "int",
                    isPrimary: true
                },{
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },{
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKStudentCourse",
                    referencedTableName: "students",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_student"],
                    onUpdate: "CASCADE",
                },{
                    name: "FKCourseStudent",
                    referencedTableName: "courses",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_course"],
                    onUpdate: "CASCADE",
                }                
            ]
        })
    )}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("course_studens");
    }

}
