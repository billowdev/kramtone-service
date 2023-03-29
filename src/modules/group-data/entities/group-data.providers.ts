
import { GROUP_REPOSITORY } from '../../../common/constants/repository.constant';
import { GroupDataEntity } from './group-data.entity';

export const groupProviders = [
  {
    provide: GROUP_REPOSITORY,
    useValue: GroupDataEntity,
  }
];
