import { CreateQuestionDto } from '../dto/question.dto';
import { IsArray, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty, PartialType, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
  @IsArray()
  @IsOptional()
  @ApiProperty()
  anwers?: Array<string>;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  start_date?: Date;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  end_date?: Date;
}

export class SubmittingAssessment {
  @IsArray()
  @IsOptional()
  @ApiProperty()
  data?: Array<any>;
}
