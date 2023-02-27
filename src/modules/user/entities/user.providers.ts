import { UserEntity } from '../../../modules/user/entities/user.entity';
import { USER_REPOSITORY } from '../../../common/constants';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: UserEntity,
  },
];
