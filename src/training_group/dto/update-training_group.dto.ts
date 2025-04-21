import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingGroupDto } from './create-training_group.dto';

export class UpdateTrainingGroupDto extends PartialType(CreateTrainingGroupDto) {}
