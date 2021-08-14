import { getCustomRepository } from "typeorm";

import { CourseStudentsRepository } from "../repositories/CourseStudentsRepository";
import { CourseStudents } from "../entities/CourseStudents";

class CourseStudentsService {
    private readonly courseStudentsRepository: CourseStudentsRepository;

    constructor(){
        this.courseStudentsRepository = getCustomRepository(CourseStudentsRepository);
    }

    public async create({ id_student, id_course}: CourseStudents){

        const courseStudent = await this.courseStudentsRepository.create({ id_student, id_course });
        await this.courseStudentsRepository.save(courseStudent);

        return courseStudent;
    }

    public async deleteById({ id_student, id_course }: CourseStudents) {
        const response = await this.courseStudentsRepository.delete({ id_student, id_course }); 
        return response;
    }

    public async listStudentByCourses(id_student: number) {
       const StudentByCourses = this.courseStudentsRepository.find({ 
                where:{ id_student },
                relations: ["course"]
            }
       );

       return StudentByCourses;
    }
    
    public async listCoursesByStudents(id_course: number) {
        const CourseByStudents = this.courseStudentsRepository.find({ 
            where:{ id_course },
            relations: ["student"]
        }
   );
 
        return CourseByStudents;
     }
};

export { CourseStudentsService };