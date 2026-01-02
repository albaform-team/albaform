export const getVisiblePages = (
  page: number,
  count: number,
  visibleCount: number
): number[] => {
  const half = Math.floor(visibleCount / 2);

  let start = Math.max(1, page - half);
  let end = start + visibleCount - 1;

  if (end > count) {
    end = count;
    start = Math.max(1, end - visibleCount + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};
