import { Test, TestingModule } from '@nestjs/testing';
import { TrainingGroupController } from './training_group.controller';
import { TrainingGroupService } from './training_group.service';

describe('TrainingGroupController', () => {
  let controller: TrainingGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingGroupController],
      providers: [TrainingGroupService],
    }).compile();

    controller = module.get<TrainingGroupController>(TrainingGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
