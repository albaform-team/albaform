import { useEffect, useState } from 'react';

import { NoticeListWrappedItem } from '@/types/user/noticeList';

export const useSortedItems = (
  items: NoticeListWrappedItem[],
  sortValue: string
) => {
  const [sortedItems, setSortedItems] = useState<NoticeListWrappedItem[]>([]);

  useEffect(() => {
    const newItems = [...items];

    switch (sortValue) {
      case '마감임박순':
        newItems.sort(
          (a, b) =>
            new Date(a.item.startsAt).getTime() -
            new Date(b.item.startsAt).getTime()
        );
        break;

      case '시급많은순':
        newItems.sort((a, b) => b.item.hourlyPay - a.item.hourlyPay);
        break;

      case '시간적은순':
        newItems.sort((a, b) => a.item.workhour - b.item.workhour);
        break;

      case '가나다순':
        newItems.sort((a, b) =>
          a.item.shop.item.name.localeCompare(b.item.shop.item.name)
        );
        break;
    }

    setSortedItems(newItems);
  }, [items, sortValue]);

  return { sortedItems, setSortedItems };
};
