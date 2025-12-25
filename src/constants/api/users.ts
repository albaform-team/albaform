export const USERS_API = {
  SIGN_UP: '/users',
  ME: (userId: string) => `/users/${userId}`,
} as const;
