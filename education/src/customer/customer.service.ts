import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  private readonly customers: Customer[] = [];

  create(customer: Customer): Customer {
    this.customers.push(customer);
    return customer;
  }

  findAll(): Customer[] {
    return this.customers;
  }

  findOne(id: number): Customer {
    return this.customers.find(customer => customer.id === id);
  }

  update(id: number, updatedCustomer: Customer): Customer {
    const index = this.customers.findIndex(customer => customer.id === id);
    this.customers[index] = updatedCustomer;
    return updatedCustomer;
  }

  remove(id: number): boolean {
    const index = this.customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
      return true;
    }
    return false;
  }
}
