import { Module } from '@nestjs/common';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';
import { DatasourceModule } from 'src/datasource /datasource.module';

@Module({
  controllers: [RentalController],
  providers: [RentalService],
  imports: [DatasourceModule]
})
export class RentalModule {}
