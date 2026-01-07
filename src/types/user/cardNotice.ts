export interface CardNotice {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  closed: boolean;
  shop: {
    id: string;
    name: string;
    address1: string;
    imageUrl: string;
    originalHourlyPay: number;
  };
}
