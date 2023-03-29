import { UserEntity } from './user-account.entity';
import { USER_REPOSITORY } from '../../../common/constants';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: UserEntity,
  },
];
