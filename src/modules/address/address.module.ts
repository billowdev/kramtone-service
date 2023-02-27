import { Module } from '@nestjs/common';
import { AddressController } from './controllers/address.controller';
import { addressProviders } from './entities/address.providers';
import { AddressService } from './services/address.service';

@Module({
  controllers: [AddressController],
  providers: [AddressService, ...addressProviders],
  exports: [AddressService]
})
export class AddressModule {}
