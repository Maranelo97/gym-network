import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingGroupService } from './training_group.service';
import { CreateTrainingGroupDto } from './dto/create-training_group.dto';
import { UpdateTrainingGroupDto } from './dto/update-training_group.dto';

@Controller('training-group')
export class TrainingGroupController {
  constructor(private readonly trainingGroupService: TrainingGroupService) {}

  @Post()
  create(@Body() createTrainingGroupDto: CreateTrainingGroupDto) {
    return this.trainingGroupService.create(createTrainingGroupDto);
  }

  @Get()
  findAll() {
    return this.trainingGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingGroupDto: UpdateTrainingGroupDto) {
    return this.trainingGroupService.update(+id, updateTrainingGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingGroupService.remove(+id);
  }
}
