import {
    Entity,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { Course } from "./Course";
import { Student } from "./Student";

@Entity("course_students")
class CourseStudents {
    
    @PrimaryColumn()
    public id_student: number;

    @JoinColumn({ name: "id_student" })
    @ManyToOne(() => Student)
    private student?: Student;

    @PrimaryColumn()
    public id_course: number;

    @JoinColumn({ name: "id_course" })
    @ManyToOne(() => Course)  
    private course?: Course;

    @CreateDateColumn()
    private readonly created_at?: Date;

    @UpdateDateColumn()
    private readonly updated_at?: Date;

};

export { CourseStudents };
