import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity("students")
class Student {

    @PrimaryGeneratedColumn()
    private  readonly id?: number;

    @Column()
    public name: string;

    @CreateDateColumn()
    private readonly created_at?: Date;

    @UpdateDateColumn()
    private readonly updated_at?: Date;
};

export { Student };