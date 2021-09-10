import { IsNotEmpty, Length } from 'class-validator';




export class createQuestionDto{
    @IsNotEmpty()
    @Length(3, 255)
    question: number; 
    
    @IsNotEmpty()
    answer: string; 

    @IsNotEmpty()
    instruction: string;

    @IsNotEmpty()
    category: string;

    @IsNotEmpty()
    options: string;

    @IsNotEmpty()
    explanations: string;

    @IsNotEmpty()
    createdAt: Date;

    @IsNotEmpty()
    assessmentId: number
}
