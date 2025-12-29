import { APPLICATIONS_API, USERS_API } from '@/constants/api';
import { NoticesResponse } from '@/types/api/shop';
import { UserInfoResponse } from '@/types/api/user';

import { services } from './servicesClient';

export const GetUserInfo = async (userId: string) => {
  const { data } = await services.get<UserInfoResponse>(USERS_API.ME(userId));

  return data;
};

export const GetUserApplications = async (userId: string) => {
  const { data } = await services.get<NoticesResponse>(
    APPLICATIONS_API.USER_LIST(userId)
  );

  return data;
};
