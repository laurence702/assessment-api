import { UpdateAssessmentDto } from './../dto/update-assessment.dto';

import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { validate } from 'class-validator';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestionEntity } from "../entities/question.entity";
import { HttpStatus, Body } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/question.dto';




export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
  ) { }

  async create(@Body() questionDto: CreateQuestionDto): Promise<any> {

 // create new assessment
    let newQuestion = new QuestionEntity();
    newQuestion.question = questionDto.question;
    newQuestion.answer = questionDto.answer;
    newQuestion.instruction = questionDto.instruction;
    newQuestion.category = questionDto.category;
    newQuestion.explanations = questionDto.explanations;
    //newQuestion.assessment = questionDto.assessmentId;
    newQuestion.options = questionDto.options || [];

    const errors = await validate(newQuestion);
    if (errors.length > 0) {
      const _errors = { username: 'Userinput is not valid.' };
      throw new HttpException({ message: 'Input data validation failed', _errors }, HttpStatus.BAD_REQUEST);

    } else {
      try {
        const savedUser = await this.questionRepository.save(newQuestion);
        return this.buildQuestionsRO(savedUser);
      } catch (error) {
        `Questions  [${questionDto.question}] cant be created`;
      }
    }

  }

  private buildQuestionsRO(question: QuestionEntity) {
    const questionRO = {

    };

    return { user: questionRO };
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