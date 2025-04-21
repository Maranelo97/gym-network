import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SystemWorkOutService } from './system-work-out.service';
import { CreateSystemWorkOutDto } from './dto/create-system-work-out.dto';
import { UpdateSystemWorkOutDto } from './dto/update-system-work-out.dto';

@Controller('system-work-out')
export class SystemWorkOutController {
  constructor(private readonly systemWorkOutService: SystemWorkOutService) {}

  @Post()
  create(@Body() createSystemWorkOutDto: CreateSystemWorkOutDto) {
    return this.systemWorkOutService.create(createSystemWorkOutDto);
  }

  @Get()
  findAll() {
    return this.systemWorkOutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.systemWorkOutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSystemWorkOutDto: UpdateSystemWorkOutDto) {
    return this.systemWorkOutService.update(+id, updateSystemWorkOutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.systemWorkOutService.remove(+id);
  }
}
