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
  ) { }
  async create(createAssessmentDto: CreateAssessmentDto): Promise<any> {
    try {
      const newAssessment = await this.assessmentRepository.save({ ...createAssessmentDto });
      const errors = await validate(newAssessment);
      const res = (errors.length == 0) ? this.buildAssessmentRO(newAssessment):  new HttpException({ message: 'An error occured', errors }, HttpStatus.BAD_REQUEST);
      return res;
    } catch (errors) {
      throw new HttpException({ message: 'An error occured', errors }, HttpStatus.BAD_REQUEST);
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

    return { user: userRO };
  }


  findAll() {
    return this.assessmentRepository.find();
  }

  async findOne(id: number) {
   return await this.assessmentRepository.findOne(id);
  }

  async update(id: number, updateAssessmentDto: UpdateAssessmentDto) {
    return await this.assessmentRepository.save({
      id,
      ...updateAssessmentDto,
    })
  }

  remove(id: number) {
    return `This action removes a #${id} assessment`;
  }
}
