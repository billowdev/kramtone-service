import { ADDRESS_REPOSITORY } from '../../../common/constants';
import { AddressEntity } from './address.entity';

export const addressProviders = [
  {
    provide: ADDRESS_REPOSITORY,
    useValue: AddressEntity,
  },
];
