export const SHOPS_API = {
  CREATE: '/shops',
  DETAIL: (shopId: string) => `/shops/${shopId}`,
} as const;
