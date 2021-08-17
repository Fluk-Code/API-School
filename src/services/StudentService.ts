import { Student } from "../entities/Student";
import { getCustomRepository } from "typeorm";
import { StudentRepository } from "../repositories/StudentRepository";

class StudentService {
    private readonly studentRepository: StudentRepository;

    constructor(){
        this.studentRepository = getCustomRepository(StudentRepository)
    }

    public async create({ name }: Student) {

        name = name?.trim();
        const student = this.studentRepository.create({ name })
        
        await this.studentRepository.save(student);
        return student;
    }

    public async updateById(id:number, { name }: Student) {
        name = name?.trim();
        const student =  this.studentRepository.create({ name });        
        await this.studentRepository.update(id, student);

        return student;
    }

    public async deleteById(id:number) {
        const response = await this.studentRepository.delete(id);        
        return response;
    }

    public async list() {
        const studend = await this.studentRepository.find();

        return studend;
    }

    public async listById(id: number) {
        const studend = await this.studentRepository.findOne(id);

        return studend;
    }
};

export { StudentService };