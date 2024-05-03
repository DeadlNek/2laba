import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(): Customer[] {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Customer {
    return this.customerService.findOne(id);
  }

  @Post()
  create(@Body() createCustomer: Customer): Customer {
    return this.customerService.create(createCustomer);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCustomer: Customer): Customer {
    return this.customerService.update(id, updateCustomer);
  }

  @Delete(':id')
  remove(@Param('id') id: number): boolean {
    return this.customerService.remove(id);
  }
}
