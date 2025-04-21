import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Routine } from '../../routine/entities/routine.entity';

@Entity('training_group')
export class TrainingGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // ✅ MANY-TO-MANY con usuarios
  @ManyToMany(() => User)
  @JoinTable({
    name: 'training_group_subscribers', // nombre de la tabla intermedia
    joinColumn: {
      name: 'group_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  subscribers: User[];

  @ManyToOne(() => User)
  @JoinColumn({ name: 'trainer_id' })
  trainer: User;

  @ManyToOne(() => Routine, (routine) => routine.trainingGroups)
  @JoinColumn({ name: 'routine_id' })
  routine: Routine;
}
