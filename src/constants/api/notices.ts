export const NOTICES_API = {
  LIST: '/notices',
  SHOP_LIST: (shopId: string) => `/shops/${shopId}/notices`,
  SHOP_DETAIL: (shopId: string, noticeId: string) =>
    `/shops/${shopId}/notices/${noticeId}`,
} as const;
