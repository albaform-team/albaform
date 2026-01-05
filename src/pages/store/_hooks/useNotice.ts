import { useEffect, useState } from 'react';

import { getNotice } from '@/lib/services/noticeService';
import { NoticeListResponse } from '@/types/user/noticeList';

export const useNotice = () => {
  const [notice, setNotice] = useState<NoticeListResponse | null>(null);

  useEffect(() => {
    const fetchNotice = async () => {
      const data = await getNotice();
      setNotice(data);
    };
    fetchNotice();
  }, []);

  return { notice, setNotice };
};
