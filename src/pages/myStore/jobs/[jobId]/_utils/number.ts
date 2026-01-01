export const getPayIncreaseRate = (
  hourlyPay: number,
  originalHourlyPay: number
): number | null => {
  if (originalHourlyPay <= 0) return null;

  const diff = hourlyPay - originalHourlyPay;

  if (diff <= 0) return null;

  return Math.round((diff / originalHourlyPay) * 1000) / 10;
};
