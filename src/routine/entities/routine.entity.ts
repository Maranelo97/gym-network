import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { SystemWorkOut } from '../../system-work-out/entities/system-work-out.entity';
import { TrainingGroup } from '../../training_group/entities/training_group.entity';

@Entity('routine')
export class Routine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_by: string;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'routine_subscribers',
    joinColumn: {
      name: 'routine_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  subscribers: User[];

  @ManyToOne(() => SystemWorkOut, (system) => system.routines)
  @JoinColumn({ name: 'system_id' })
  system: SystemWorkOut;

  @OneToMany(() => TrainingGroup, (group) => group.routine)
  trainingGroups: TrainingGroup[];
}
