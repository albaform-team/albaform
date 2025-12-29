import _MOCK_USER_APPLICATIONS from '@/__MOCK/_MOCK_USER_APPLICATIONS.json';
import { APPLICATIONS_API, USERS_API } from '@/constants/api';
import { appliedJobListMapper } from '@/pages/profile/[userId]/_utils/mapper';
import { UserInfoResponse } from '@/types/api/user';
import { AppliedJobListResponse } from '@/types/api/userAppliedJobList';

import { services } from './servicesClient';

export const GetUserInfo = async (userId: string) => {
  const { data } = await services.get<UserInfoResponse>(USERS_API.ME(userId));

  return data;
};

export const GetUserApplications = async (
  userId: string,
  offset: number = 0,
  limit: number
) => {
  const { data } = await services.get<AppliedJobListResponse>(
    APPLICATIONS_API.USER_LIST(userId),
    { params: { offset, limit } }
  );

  console.log(appliedJobListMapper(data).items[0]);

  return _MOCK_USER_APPLICATIONS.splice(offset, limit);
};
