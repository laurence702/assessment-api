import { CreateAssessmentDto } from './create-assessment.dto';
import { IsArray, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty, PartialType, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAssessmentDto extends PartialType(CreateAssessmentDto) {
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

export class SubmittingAssesment {
  @IsArray()
  @IsOptional()
  @ApiProperty()
  data?: Array<any>;
}
