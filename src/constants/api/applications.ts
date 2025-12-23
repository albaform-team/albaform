export const APPLICATIONS_API = {
  SHOP_NOTICE_LIST: (shopId: string, noticeId: string) =>
    `/shops/${shopId}/notices/${noticeId}/applications`,
  SHOP_NOTICE_DETAIL: (
    shopId: string,
    noticeId: string,
    applicationId: string
  ) => `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
  USER_LIST: (userId: string) => `/users/${userId}/applications`,
} as const;
