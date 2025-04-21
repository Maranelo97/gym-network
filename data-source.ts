import { DataSource } from 'typeorm';
import { User } from './src/users/entities/user.entity';
import { Routine } from './src/routine/entities/routine.entity';
import { TrainingGroup } from './src/training_group/entities/training_group.entity'; // ojo con el guion
import { SystemWorkOut } from './src/system-work-out/entities/system-work-out.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'gym-network-db',
  entities: [User, Routine, TrainingGroup, SystemWorkOut],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
