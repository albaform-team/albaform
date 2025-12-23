export const ALERTS_API = {
  LIST: (userId: string) => `/users/${userId}/alerts`,
  READ: (userId: string, alertId: string) =>
    `/users/${userId}/alerts/${alertId}`,
} as const;
