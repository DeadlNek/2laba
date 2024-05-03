import { Injectable } from '@nestjs/common';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehicleService {
  private readonly vehicles: Vehicle[] = [];

  create(vehicle: Vehicle): Vehicle {
    this.vehicles.push(vehicle);
    return vehicle;
  }

  findAll(): Vehicle[] {
    return this.vehicles;
  }

  findOne(id: number): Vehicle {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }

  update(id: number, updatedVehicle: Vehicle): Vehicle {
    const index = this.vehicles.findIndex(vehicle => vehicle.id === id);
    this.vehicles[index] = updatedVehicle;
    return updatedVehicle;
  }

  remove(id: number): boolean {
    const index = this.vehicles.findIndex(vehicle => vehicle.id === id);
    if (index !== -1) {
      this.vehicles.splice(index, 1);
      return true;
    }
    return false;
  }
}
