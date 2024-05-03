import { Injectable } from '@nestjs/common';
import { Rental } from './rental.entity';

@Injectable()
export class RentalService {
  private readonly rental: Rental[] = [];

  create(rental: Rental): Rental {
    this.rental.push(rental);
    return rental;
  }

  findAll(): Rental[] {
    return this.rental;
  }

  findOne(id: number): Rental {
    return this.rental.find(rental => rental.id === id);
  }

  update(id: number, updatedRental: Rental): Rental {
    const index = this.rental.findIndex(rental => rental.id === id);
    this.rental[index] = updatedRental;
    return updatedRental;
  }

  remove(id: number): boolean {
    const index = this.rental.findIndex(rental => rental.id === id);
    if (index !== -1) {
      this.rental.splice(index, 1);
      return true;
    }
    return false;
  }
}