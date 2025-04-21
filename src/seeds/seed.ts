import { User } from '../users/entities/user.entity';
import { SystemWorkOut } from '../system-work-out/entities/system-work-out.entity';
import { Routine } from '../routine/entities/routine.entity';
import { TrainingGroup } from '../training_group/entities/training_group.entity';
import { AppDataSource } from '../../data-source';

async function seed() {
  await AppDataSource.initialize();

  const userRepo = AppDataSource.getRepository(User);
  const systemRepo = AppDataSource.getRepository(SystemWorkOut);
  const routineRepo = AppDataSource.getRepository(Routine);
  const groupRepo = AppDataSource.getRepository(TrainingGroup);

  // 1. Crear 5 usuarios
  const users = await userRepo.save(
    Array.from({ length: 5 }).map((_, i) =>
      userRepo.create({
        username: `usuario${i + 1}`,
        role: i === 0 ? 'entrenador' : 'cliente',
        password: '1234',
        created_at: new Date(),
      }),
    ),
  );

  // 2. Crear 2 sistemas de entrenamiento
  const systems = await systemRepo.save([
    systemRepo.create({ name: 'Hipertrofia' }),
    systemRepo.create({ name: 'Cardio Extremo' }),
  ]);

  // 3. Crear 2 rutinas
  const routines = await routineRepo.save([
    routineRepo.create({
      created_by: 'admin',
      system: systems[0],
      subscribers: [users[1], users[2]],
    }),
    routineRepo.create({
      created_by: 'admin',
      system: systems[1],
      subscribers: [users[3], users[4]],
    }),
  ]);

  // 4. Crear 1 grupo de entrenamiento para cada rutina
  await groupRepo.save([
    groupRepo.create({
      name: 'Grupo Fuerza',
      description: 'Entrenamiento de fuerza progresiva',
      trainer: users[0],
      routine: routines[0],
      subscribers: [users[1], users[2]],
    }),
    groupRepo.create({
      name: 'Grupo Cardio',
      description: 'Alta intensidad y resistencia',
      trainer: users[0],
      routine: routines[1],
      subscribers: [users[3], users[4]],
    }),
  ]);

  console.log('✅ Base de datos poblada correctamente.');
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('❌ Error en el seed:', err);
  void AppDataSource.destroy();
});
