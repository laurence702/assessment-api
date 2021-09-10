import {
    IsString,
    IsBoolean,
    IsNotEmpty,
    IsObject,
    IsOptional,
    IsDateString,
    IsArray,
  } from 'class-validator';
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { AssessmentType } from '../../common/enum';
  
  export class CreateAssessmentDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
  
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    instruction?: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional()
    assesment_type?: AssessmentType;
  
    @IsBoolean()
    @IsOptional()
    @ApiPropertyOptional()
    is_enabled?: boolean;
  
    @IsDateString()
    @IsOptional()
    @ApiPropertyOptional()
    start_date?: Date;
  
    @IsDateString()
    @IsOptional()
    @ApiPropertyOptional()
    end_date?: Date;
  
    @IsObject()
    @IsNotEmpty()
    @ApiProperty()
    duration: string;
  
    @IsArray()
    @IsOptional()
    @ApiPropertyOptional()
    users: [];
  
    @IsArray()
    @IsNotEmpty()
    @ApiPropertyOptional()
    questions: Array<any>;
  }
  