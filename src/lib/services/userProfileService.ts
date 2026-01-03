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
  const res = await services.put(`/users/${userId}`, data);

  return res.data.item;
};
