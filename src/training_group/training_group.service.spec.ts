import { Test, TestingModule } from '@nestjs/testing';
import { TrainingGroupService } from './training_group.service';

describe('TrainingGroupService', () => {
  let service: TrainingGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingGroupService],
    }).compile();

    service = module.get<TrainingGroupService>(TrainingGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
