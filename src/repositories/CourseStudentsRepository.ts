import { 
    Repository,
    EntityRepository
} from "typeorm";
import { CourseStudents } from "../entities/CourseStudents";

@EntityRepository(CourseStudents)
class CourseStudentsRepository extends Repository<CourseStudents>{};

export { CourseStudentsRepository };