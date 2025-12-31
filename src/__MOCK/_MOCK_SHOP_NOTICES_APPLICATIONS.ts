import { ShopNoticeApplicationsResponse } from '@/types/api/shopNoticeApplications';

export const _MOCK_SHOP_NOTICES_APPLICATIONS: ShopNoticeApplicationsResponse = {
  offset: 0,
  limit: 20,
  count: 20,
  hasNext: false,
  items: Array.from({ length: 20 }).map((_, index) => {
    const statuses = ['pending', 'accepted', 'rejected', 'canceled'] as const;

    return {
      item: {
        id: `application-${String(index + 1).padStart(3, '0')}`,
        status: statuses[index % statuses.length],
        createdAt: `2025-01-${String(10 + index).padStart(
          2,
          '0'
        )}T09:00:00.000Z`,
        user: {
          item: {
            id: `user-${String(index + 1).padStart(3, '0')}`,
            email: `employee${index + 1}@test.com`,
            type: 'employee',
            name: `알바생${index + 1}`,
            phone:
              index % 2 === 0
                ? `010-12${index.toString().padStart(2, '0')}-5678`
                : undefined,
            bio:
              index % 3 === 0 ? '성실하게 오래 일할 수 있습니다.' : undefined,
          },
          href: `/users/user-${String(index + 1).padStart(3, '0')}`,
        },
        shop: {
          item: {
            id: 'shop-001',
            name: '진주회관',
            category: '한식',
            address1: '서울시 중구',
            address2: '세종대로11길 26',
            description: '콩국수로 유명한 맛집',
            imageUrl: 'https://example.com/images/shops/jinju.png',
            originalHourlyPay: 10000,
          },
          href: '/shops/shop-001',
        },
        notice: {
          item: {
            id: 'notice-001',
            hourlyPay: 12000,
            description: '주말 홀서빙 알바 구합니다',
            startsAt: '2025-01-20T09:00:00.000Z',
            workhour: 8,
            closed: false,
          },
          href: '/shops/shop-001/notices/notice-001',
        },
      },
      links: [],
    };
  }),
  links: [],
};
