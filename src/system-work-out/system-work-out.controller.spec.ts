import { Test, TestingModule } from '@nestjs/testing';
import { SystemWorkOutController } from './system-work-out.controller';
import { SystemWorkOutService } from './system-work-out.service';

describe('SystemWorkOutController', () => {
  let controller: SystemWorkOutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemWorkOutController],
      providers: [SystemWorkOutService],
    }).compile();

    controller = module.get<SystemWorkOutController>(SystemWorkOutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
