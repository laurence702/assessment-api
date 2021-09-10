import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany, ManyToOne, BeforeUpdate } from 'typeorm';
import { AssessmentEntity } from './assessment.entity';

@Entity('questions')
export class QuestionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    question: string;

    @Column()
    answer: string;

    @Column()
    instruction: string;

    @Column()
    category: string;

    @Column('text')
    options: string[];

    @Column()
    explanations?: string;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date;

    @BeforeUpdate()
    updateTimestamp() {
        this.updatedAt = new Date;
    }

    @ManyToOne(type => AssessmentEntity, assessment => assessment.questions) 
    assessment: AssessmentEntity
    
}