export type ShopItem = {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
};

export type Shop = {
  item: ShopItem;
  href: string;
};

export type NoticeItem = {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: Shop;
};

export type NoticeWrapper = {
  item: NoticeItem;
  links: string[];
};

export type NoticesResponse = {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  address: string[];
  keyword: string;
  items: NoticeWrapper[];
  links: string[];
};

export const mockNotices: NoticesResponse = {
  offset: 0,
  limit: 10,
  count: 1,
  hasNext: false,
  address: ['서울시 송파구'],
  keyword: '카페',
  items: [
    {
      item: {
        id: 'notice-001',
        hourlyPay: 15000,
        startsAt: '2026-01-02',
        workhour: 3,
        description: '따뜻한 분위기의 카페에서 함께할 알바를 찾습니다.',
        closed: false,
        shop: {
          item: {
            id: 'shop-001',
            name: '너굴 상점',
            category: '한식',
            address1: '서울시 송파구',
            address2: '잠실로 123',
            description: '정겨운 동네 식당',
            imageUrl: 'https://source.unsplash.com/random/400x300?food', // 테스트용
            originalHourlyPay: 7500,
          },
          href: '/shops/shop-001',
        },
      },
      links: [],
    },
  ],
  links: [],
};
