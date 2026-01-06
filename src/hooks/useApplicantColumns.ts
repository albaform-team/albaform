import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactNode, useMemo } from 'react';

type Column<T> = {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
};

type ResponsiveVisibleKeys<K extends string> = {
  mobile: readonly K[];
  tablet: readonly K[];
  desktop: readonly K[];
};

export const useResponsiveColumns = <T, K extends string>(
  allColumns: readonly (Column<T> & { key: K })[],
  visibleKeysByBp: ResponsiveVisibleKeys<K>,
  media: { tablet: string; desktop: string }
) => {
  const isTabletUp = useMediaQuery(media.tablet);
  const isDesktopUp = useMediaQuery(media.desktop);

  const visibleKeys = useMemo(() => {
    if (isDesktopUp) return visibleKeysByBp.desktop;
    if (isTabletUp) return visibleKeysByBp.tablet;
    return visibleKeysByBp.mobile;
  }, [isTabletUp, isDesktopUp, visibleKeysByBp]);

  const columns = useMemo(
    () => allColumns.filter(col => visibleKeys.includes(col.key)),
    [allColumns, visibleKeys]
  );

  return { columns, visibleKeys, isTabletUp, isDesktopUp };
};
