import { AssessmentType } from '../../common/enum';
import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany} from 'typeorm';

@Entity('assessments')
export class AssessmentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    instruction?: string;

    @Column({ default: '' })
    assesment_type: AssessmentType

    @Column({ default: '1' })
    is_enabled: boolean;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @Column()
    duration: string;
}
