import { Course } from "../entities/Course";
import { getCustomRepository } from "typeorm";
import { CourseRepository } from "../repositories/CourseRepository";

class CourseService {
    private readonly courseRepository: CourseRepository;
    
    constructor(){
        this.courseRepository = getCustomRepository(CourseRepository)
    }

    public async create({ description, program }: Course) {

        description = description?.trim();
        program = program?.trim();
        const course = this.courseRepository.create({ description, program });

        await this.courseRepository.save(course);
        return course;
    }

    public async updateById(id:number, { description, program }: Course) {

        description = description?.trim();
        program = program?.trim();
        const course =  this.courseRepository.create({ description, program  }); 
               
        await this.courseRepository.update(id, course);

        return course;
    }

    public async deleteById(id:number) {
        const response = await this.courseRepository.delete(id);
        return response;
    }

    public async list() {
        const courses = await this.courseRepository.find();

        return courses; 
    }

    public async listById(id: number) {
        const course = await this.courseRepository.findOne(id);

        return course;
    }

};

export { CourseService };