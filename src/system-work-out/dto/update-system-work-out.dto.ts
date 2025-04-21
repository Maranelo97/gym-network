import { PartialType } from '@nestjs/mapped-types';
import { CreateSystemWorkOutDto } from './create-system-work-out.dto';

export class UpdateSystemWorkOutDto extends PartialType(CreateSystemWorkOutDto) {}
