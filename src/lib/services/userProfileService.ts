import { USERS_API } from '@/constants/api';
import useAuthStore from '@/stores/useAuthStore';

import { services } from './servicesClient';
import { GetUserInfo } from './userService';

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

  const userInfoRes = await GetUserInfo(userId);

  const { setAuth, accessToken } = useAuthStore.getState();

  if (accessToken) {
    setAuth({
      accessToken,
      user: userInfoRes.item,
    });
  }

  return res.data.item;
};
