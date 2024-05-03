import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { DatasourceModule } from 'src/datasource /datasource.module';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  imports: [DatasourceModule]
})
export class CustomerModule {}
