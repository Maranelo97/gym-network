import { Module } from '@nestjs/common';
import { SystemWorkOutService } from './system-work-out.service';
import { SystemWorkOutController } from './system-work-out.controller';

@Module({
  controllers: [SystemWorkOutController],
  providers: [SystemWorkOutService],
})
export class SystemWorkOutModule {}
