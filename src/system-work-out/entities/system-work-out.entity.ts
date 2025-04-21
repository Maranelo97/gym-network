import { Routine } from '../../routine/entities/routine.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('systemWork')
export class SystemWorkOut {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Routine, (routine) => routine.system)
  routines: Routine[];
}
