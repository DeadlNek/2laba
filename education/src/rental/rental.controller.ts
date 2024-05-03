import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Rental } from './rental.entity';
import { RentalService } from './rental.service';

@Controller('rentals')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Get()
  findAll(): Rental[] {
    return this.rentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Rental {
    return this.rentalService.findOne(id);
  }

  @Post()
  create(@Body() createRental: Rental): Rental {
    return this.rentalService.create(createRental);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateRental: Rental): Rental {
    return this.rentalService.update(id, updateRental);
  }

  @Delete(':id')
  remove(@Param('id') id: number): boolean {
    return this.rentalService.remove(id);
  }
}
