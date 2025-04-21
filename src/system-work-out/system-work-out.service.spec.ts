import { Test, TestingModule } from '@nestjs/testing';
import { SystemWorkOutService } from './system-work-out.service';

describe('SystemWorkOutService', () => {
  let service: SystemWorkOutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemWorkOutService],
    }).compile();

    service = module.get<SystemWorkOutService>(SystemWorkOutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
