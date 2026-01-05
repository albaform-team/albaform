import { useEffect, useState } from 'react';

import { getNotice } from '@/lib/services/noticeService';
import { NoticeListResponse } from '@/types/user/noticeList';

export const useNotice = (sortValue: string, keyword?: string) => {
  const [notice, setNotice] = useState<NoticeListResponse | null>(null);

  useEffect(() => {
    const fetchNotice = async () => {
      const sortMap: Record<string, 'time' | 'pay' | 'hour' | 'shop'> = {
        마감임박순: 'time',
        시급많은순: 'pay',
        시간적은순: 'hour',
        가나다순: 'shop',
      };

      const data = await getNotice({
        sort: sortMap[sortValue],
        keyword: keyword,
        offset: 0,
        limit: 6,
      });
      setNotice(data);
    };
    fetchNotice();
  }, [sortValue, keyword]);

  return { notice };
};
