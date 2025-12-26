/**
 * 인증
 */
export const AUTH_ROUTES = {
  LOGIN: '/login',
  SIGN_UP: '/signUp',
} as const;

/**
 * 사장님 - 내 가게
 */
export const MY_STORE_ROUTES = {
  ROOT: '/myStore',

  STORE: {
    ROOT: '/myStore/store',
    NEW: '/myStore/store/new',
    EDIT: '/myStore/store/edit',
  },

  JOBS: {
    ROOT: '/myStore/jobs',
    NEW: '/myStore/jobs/new',

    DETAIL: (jobId: string) => `/myStore/jobs/${jobId}`,
    EDIT: (jobId: string) => `/myStore/jobs/${jobId}/edit`,
  },
} as const;

/**
 * 일반 회원 - 마이페이지
 */
export const PROFILE_ROUTES = {
  ROOT: (userId: string) => `/profile/${userId}`,
  ADD_PROFILE: (userId: string) => `/profile/${userId}/addProfile`,
} as const;

/**
 * 공고 리스트 / 공고 상세
 */
export const STORE_ROUTES = {
  ROOT: '/store',
  DETAIL: (storeId: string) => `/store/${storeId}`,
} as const;
