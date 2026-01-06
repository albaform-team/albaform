import { USERS_API } from '@/constants/api';

import { services } from './servicesClient';

interface UserProfileInput {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

export const registerUserProfile = async (
  userId: string,
  data: UserProfileInput
) => {
  const res = await services.put(USERS_API.ME(userId), data);

  return res.data.item;
};
