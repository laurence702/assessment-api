import { QuestionController } from './controllers/question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AssessmentService } from './services/assessment.service';
import { AssessmentController } from './controllers/assessment.controller';
import { QuestionEntity } from './entities/question.entity';
import { AssessmentEntity } from './entities/assessment.entity';
import { QuestionService } from './services/question.service';

@Module({
  imports: [TypeOrmModule.forFeature([AssessmentEntity, QuestionEntity])],
  controllers: [AssessmentController, QuestionController],
  providers: [AssessmentService, QuestionService]
})
export class AssessmentModule { }
