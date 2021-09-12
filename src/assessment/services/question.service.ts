import { UpdateAssessmentDto } from './../dto/update-assessment.dto';

import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { validate } from 'class-validator';
import { InjectRepository } from "@nestjs/typeorm";
import { getConnection, Repository } from "typeorm";
import { QuestionEntity } from "../entities/question.entity";
import { HttpStatus, Body } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/question.dto';
import { TagEntity } from '../../tag/tag.entity';
import { UpdateQuestionDto } from '../dto/update-question.dto';
import { UserRO } from '../../user/user.interface';




export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionsRepository: Repository<QuestionEntity>
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
        const savedUser = await this.questionsRepository.save(newQuestion);
        return this.buildQuestionsRO(savedUser);
      } catch (error) {
        `Questions  [${questionDto.question}] cant be created`;
      }
    }

  }

  private buildQuestionsRO(question: QuestionEntity) {
    const questionRO = {
      id: question.id,
      assessment: question.assessment,
      category: question.category,
      explanations: question.explanations,
      question: question.question,
      options: question.options
    };

    return { question: questionRO };
  }

  async findAll(): Promise<QuestionEntity[]> {
    return await this.questionsRepository.find();
  }

  async findOne(id: number) {
    try {
      const question = await this.questionsRepository.findOneOrFail(id);
      return question;
    } catch (errors) {
      throw new HttpException({ message: "An error occured", errors }, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    try {
      const question = await this.questionsRepository.findOne(id);
      return this.questionsRepository.save({
        ...question, // existing fields
        ...updateQuestionDto // updated fields
      });
    } catch (errors) {
      throw new HttpException({ message: "An error occured", errors }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async remove(id: number): Promise<QuestionEntity>{
    const question = await this.questionsRepository.findOne(id);

    return await this.questionsRepository.remove(question);
  }
}