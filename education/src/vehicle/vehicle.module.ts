import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { DatasourceModule } from 'src/datasource /datasource.module';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService],
  imports: [DatasourceModule]
})
export class VehicleModule {}