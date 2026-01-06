import { ALERTS_API } from '@/constants/api/alerts';
import type { ReadAlertResponse, UserAlertsResponse } from '@/types/api/alerts';

import { services } from './servicesClient';

export interface GetUserAlertsParams {
  offset?: number;
  limit?: number;
}

export const getUserAlerts = async (
  userId: string,
  params?: GetUserAlertsParams
) => {
  const { data } = await services.get<UserAlertsResponse>(
    ALERTS_API.LIST(userId),
    { params }
  );

  return data;
};

export const readUserAlert = async (userId: string, alertId: string) => {
  const { data } = await services.put<ReadAlertResponse>(
    ALERTS_API.READ(userId, alertId)
  );

  return data;
};
