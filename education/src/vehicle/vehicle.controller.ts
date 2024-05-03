import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Vehicle } from './vehicle.entity';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  findAll(): Vehicle[] {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Vehicle {
    return this.vehicleService.findOne(id);
  }

  @Post()
  create(@Body() createVehicle: Vehicle): Vehicle {
    return this.vehicleService.create(createVehicle);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateVehicle: Vehicle): Vehicle {
    return this.vehicleService.update(id, updateVehicle);
  }

  @Delete(':id')
  remove(@Param('id') id: number): boolean {
    return this.vehicleService.remove(id);
  }
}
