import { Module } from '@nestjs/common';
import { VehicleModule} from './vehicle/vehicle.module'
import { CustomerModule } from './customer/customer.module';
import { RentalModule } from './rental/rental.module';
import { DatasourceModule } from './datasource /datasource.module';

@Module({
  imports: [VehicleModule, CustomerModule, RentalModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
