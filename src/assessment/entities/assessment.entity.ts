import { AssessmentType } from '../../common/enum';
import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany} from 'typeorm';
import { QuestionEntity } from './question.entity';

@Entity('assessments')
export class AssessmentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column({nullable: true})
    instruction: string;

    @Column({ default: 'aptitude' })
    assesment_type: AssessmentType

    @Column({ default: '1' })
    is_enabled: boolean;

    @Column({type: 'timestamp'})
    start_date: Date;

    @Column({type: 'timestamp',nullable: true})
    end_date: Date;

    @Column({nullable: true})
    duration: string;

    @OneToMany(type => QuestionEntity, (question) => question.assessment)
    questions: QuestionEntity[];
}
