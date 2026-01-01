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
  limit: 6,
  count: 7,
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
    {
      item: {
        id: 'notice-002',
        hourlyPay: 12000,
        startsAt: '2026-01-01',
        workhour: 4,
        description: '감성적인 디저트 카페에서 즐겁게 일해요!',
        closed: true,
        shop: {
          item: {
            id: 'shop-002',
            name: '감성 카페',
            category: '카페',
            address1: '서울시 강남구',
            address2: '역삼동 456',
            description: '디저트와 커피가 맛있는 공간',
            imageUrl: 'https://source.unsplash.com/random/400x300?cafe',
            originalHourlyPay: 8000,
          },
          href: '/shops/shop-002',
        },
      },
      links: [],
    },
    {
      item: {
        id: 'notice-002',
        hourlyPay: 12000,
        startsAt: '2026-01-05',
        workhour: 4,
        description: '감성적인 디저트 카페에서 즐겁게 일해요!',
        closed: false,
        shop: {
          item: {
            id: 'shop-002',
            name: '감성 카페',
            category: '카페',
            address1: '서울시 강남구',
            address2: '역삼동 456',
            description: '디저트와 커피가 맛있는 공간',
            imageUrl: 'https://source.unsplash.com/random/400x300?cafe',
            originalHourlyPay: 8000,
          },
          href: '/shops/shop-002',
        },
      },
      links: [],
    },
    {
      item: {
        id: 'notice-002',
        hourlyPay: 12000,
        startsAt: '2026-01-05',
        workhour: 4,
        description: '감성적인 디저트 카페에서 즐겁게 일해요!',
        closed: false,
        shop: {
          item: {
            id: 'shop-002',
            name: '감성 카페',
            category: '카페',
            address1: '서울시 강남구',
            address2: '역삼동 456',
            description: '디저트와 커피가 맛있는 공간',
            imageUrl: 'https://source.unsplash.com/random/400x300?cafe',
            originalHourlyPay: 8000,
          },
          href: '/shops/shop-002',
        },
      },
      links: [],
    },
    {
      item: {
        id: 'notice-002',
        hourlyPay: 12000,
        startsAt: '2026-01-15',
        workhour: 4,
        description: '감성적인 디저트 카페에서 즐겁게 일해요!',
        closed: false,
        shop: {
          item: {
            id: 'shop-002',
            name: '감성 카페',
            category: '카페',
            address1: '서울시 강남구',
            address2: '역삼동 456',
            description: '디저트와 커피가 맛있는 공간',
            imageUrl: 'https://source.unsplash.com/random/400x300?cafe',
            originalHourlyPay: 8000,
          },
          href: '/shops/shop-002',
        },
      },
      links: [],
    },
    {
      item: {
        id: 'notice-002',
        hourlyPay: 12000,
        startsAt: '2026-01-27',
        workhour: 4,
        description: '감성적인 디저트 카페에서 즐겁게 일해요!',
        closed: false,
        shop: {
          item: {
            id: 'shop-002',
            name: '감성 카페',
            category: '카페',
            address1: '서울시 강남구',
            address2: '역삼동 456',
            description: '디저트와 커피가 맛있는 공간',
            imageUrl: 'https://source.unsplash.com/random/400x300?cafe',
            originalHourlyPay: 8000,
          },
          href: '/shops/shop-002',
        },
      },
      links: [],
    },
    {
      item: {
        id: 'notice-002',
        hourlyPay: 12000,
        startsAt: '2026-01-05',
        workhour: 4,
        description: '감성적인 디저트 카페에서 즐겁게 일해요!',
        closed: false,
        shop: {
          item: {
            id: 'shop-002',
            name: '감성 카페',
            category: '카페',
            address1: '서울시 강남구',
            address2: '역삼동 456',
            description: '디저트와 커피가 맛있는 공간',
            imageUrl: 'https://source.unsplash.com/random/400x300?cafe',
            originalHourlyPay: 8000,
          },
          href: '/shops/shop-002',
        },
      },
      links: [],
    },
  ],
  links: [],
};
