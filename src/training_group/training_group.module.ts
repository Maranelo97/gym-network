import { Module } from '@nestjs/common';
import { TrainingGroupService } from './training_group.service';
import { TrainingGroupController } from './training_group.controller';

@Module({
  controllers: [TrainingGroupController],
  providers: [TrainingGroupService],
})
export class TrainingGroupModule {}
