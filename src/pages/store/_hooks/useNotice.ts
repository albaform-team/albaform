import { useEffect, useState } from 'react';

import { getNotice } from '@/lib/services/noticeService';
import { NoticeListResponse } from '@/types/user/noticeList';

export const useNotice = () => {
  const [notice, setNotice] = useState<NoticeListResponse | null>(null);
  const [sortedItems, setSortedItems] = useState<NoticeListResponse['items']>(
    []
  );

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const data = await getNotice();
        setNotice(data);
        setSortedItems(data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotice();
  }, []);
  return { notice, setNotice, sortedItems, setSortedItems };
};
