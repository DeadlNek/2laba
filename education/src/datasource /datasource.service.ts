import {Injectable} from '@nestjs/common';
import {Vehicle} from 'src/vehicle/vehicle.entity';
import {Rental} from 'src/rental/rental.entity';
import {Customer} from 'src/customer/customer.entity';

@Injectable()
export class DatasourceService{
    private vehicle: Vehicle[]=[];
    private rental: Rental[]=[];
    private customer: Customer[]=[];

    getVehicle():Vehicle[]{
        return this.vehicle
    }
    getRental():Rental[]{
        return this.rental
    }
    getCustomer():Customer[]{
        return this.customer
    }
}
