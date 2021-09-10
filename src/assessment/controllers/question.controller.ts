import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { UpdateQuestionDto } from '../dto/update-question.dto';
import { CreateQuestionDto } from '../dto/question.dto';

import {
  ApiBearerAuth, ApiTags
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('question')

@Controller('question')
export class QuestionController {

  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }
  
  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
