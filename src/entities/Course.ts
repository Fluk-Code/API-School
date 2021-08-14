import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("courses")
class Course {

    @PrimaryGeneratedColumn()
    private readonly id?: number;

    @Column()
    public description: string;

    @Column()
    public program: string;

    @CreateDateColumn()
    private readonly created_at?: Date;

    @UpdateDateColumn()
    private readonly updated_at?: Date;
};

export { Course };