import { Injectable } from '@nestjs/common';
import { CreateTrainingGroupDto } from './dto/create-training_group.dto';
import { UpdateTrainingGroupDto } from './dto/update-training_group.dto';

@Injectable()
export class TrainingGroupService {
  create(createTrainingGroupDto: CreateTrainingGroupDto) {
    return 'This action adds a new trainingGroup';
  }

  findAll() {
    return `This action returns all trainingGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingGroup`;
  }

  update(id: number, updateTrainingGroupDto: UpdateTrainingGroupDto) {
    return `This action updates a #${id} trainingGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingGroup`;
  }
}
