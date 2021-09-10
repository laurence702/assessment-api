import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto{
    @IsNotEmpty()
    @Length(3, 255)
    question: string; 
    
    @ApiProperty()
    @IsNotEmpty()
    answer: string; 

    @ApiProperty()
    @IsNotEmpty()
    instruction: string;

    @ApiProperty()
    @IsNotEmpty()
    category: string;

    @ApiProperty()
    options: string[];

    @ApiProperty()
    @IsNotEmpty()
    explanations: string;

    @ApiProperty()
    @IsNotEmpty()
    createdAt: Date;

    @ApiProperty()
    @IsNotEmpty()
    assessmentId: number
}
