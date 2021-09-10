import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany, ManyToOne, BeforeUpdate } from 'typeorm';
import { AssessmentEntity } from './assessment.entity';

@Entity('questions')
export class QuestionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    question: string;

    @ApiProperty()
    @Column()
    answer: string;

    @ApiProperty()
    @Column()
    instruction: string;

    @ApiProperty()
    @Column({default:'logical'})
    category: string;

    @ApiProperty()
    @Column('simple-array')
    options: string[];

    @ApiProperty()
    @Column()
    explanations?: string;

    @ApiProperty()
    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @ApiProperty()
    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date;

    @Column({nullable: true})
    assessmentId: number;
    
    @BeforeUpdate()
    updateTimestamp() {
        this.updatedAt = new Date;
    }

    @ManyToOne(type => AssessmentEntity, assessment => assessment.questions) 
    assessment: AssessmentEntity
    
}