import { Injectable } from '@nestjs/common';
import { CreateSystemWorkOutDto } from './dto/create-system-work-out.dto';
import { UpdateSystemWorkOutDto } from './dto/update-system-work-out.dto';

@Injectable()
export class SystemWorkOutService {
  create(createSystemWorkOutDto: CreateSystemWorkOutDto) {
    return 'This action adds a new systemWorkOut';
  }

  findAll() {
    return `This action returns all systemWorkOut`;
  }

  findOne(id: number) {
    return `This action returns a #${id} systemWorkOut`;
  }

  update(id: number, updateSystemWorkOutDto: UpdateSystemWorkOutDto) {
    return `This action updates a #${id} systemWorkOut`;
  }

  remove(id: number) {
    return `This action removes a #${id} systemWorkOut`;
  }
}
