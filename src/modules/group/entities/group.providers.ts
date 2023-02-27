
import { GROUP_REPOSITORY } from '../../../common/constants/repository.constant';
import { GroupEntity } from './group.entity';

export const groupProviders = [
  {
    provide: GROUP_REPOSITORY,
    useValue: GroupEntity,
  }
];
