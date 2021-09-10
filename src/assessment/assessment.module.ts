import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentController } from './assessment.controller';
import { QuestionEntity } from './entities/question.entity';
import { AssessmentEntity } from './entities/assessment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssessmentEntity,QuestionEntity])],
  controllers: [AssessmentController],
  providers: [AssessmentService]
})
export class AssessmentModule {}
