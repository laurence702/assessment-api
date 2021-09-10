import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { AssessmentEntity } from '../entities/assessment.entity';
import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateAssessmentDto } from '../dto/create-assessment.dto';
import { UpdateAssessmentDto } from '../dto/update-assessment.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AssessmentService {
  constructor(
    @InjectRepository(AssessmentEntity)
    private readonly assessmentRepository: Repository<AssessmentEntity>,
  ){}
  async create(createAssessmentDto: CreateAssessmentDto): Promise<any> {
    // create new assessment
    let newAssessment = new AssessmentEntity();
    newAssessment.name = createAssessmentDto.name;
    newAssessment.assesment_type = createAssessmentDto.assesment_type;
    newAssessment.duration = createAssessmentDto.duration;
    newAssessment.instruction = createAssessmentDto.instruction;
    newAssessment.start_date = createAssessmentDto.start_date;
    newAssessment.end_date = createAssessmentDto.end_date;
    newAssessment.questions = createAssessmentDto.questions;

    const errors = await validate(newAssessment);
    if (errors.length > 0) {
      const _errors = { username: 'Userinput is not valid.' };
      throw new HttpException({ message: 'Input data validation failed', _errors }, HttpStatus.BAD_REQUEST);

    } else {
      try {
        const savedUser = await this.assessmentRepository.save(newAssessment);
        return this.buildAssessmentRO(savedUser);
      } catch (error) {
        `Assessment  [${createAssessmentDto.name}] cant be created`;
      }
    }
  }

  private buildAssessmentRO(assessment: AssessmentEntity) {
    const userRO = {
      id: assessment.id,
      assesment_type: assessment.assesment_type,
      duration: assessment.duration,
      instruction: assessment.instruction,
      start_date: assessment.start_date,
      end_date: assessment.end_date,
      question: assessment.questions,
    };

    return {user: userRO};
  }


  findAll() {
    return `This action returns all assessment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assessment`;
  }

  update(id: number, updateAssessmentDto: UpdateAssessmentDto) {
    return `This action updates a #${id} assessment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assessment`;
  }
}
