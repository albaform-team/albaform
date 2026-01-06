interface FormatRangeOptions {
  durationHours: number;
}

export const formatDateTimeRange = (
  isoString: string,
  { durationHours }: FormatRangeOptions
): string => {
  const startDate = new Date(isoString);

  const kstOffsetMs = 9 * 60 * 60 * 1000;
  const kstStart = new Date(startDate.getTime() + kstOffsetMs);
  const kstEnd = new Date(kstStart.getTime() + durationHours * 60 * 60 * 1000);

  const pad = (n: number) => String(n).padStart(2, '0');

  const yyyy = kstStart.getFullYear();
  const mm = pad(kstStart.getMonth() + 1);
  const dd = pad(kstStart.getDate());

  const startHH = pad(kstStart.getHours());
  const startMM = pad(kstStart.getMinutes());

  const endHH = pad(kstEnd.getHours());
  const endMM = pad(kstEnd.getMinutes());

  return `${yyyy}-${mm}-${dd} ${startHH}:${startMM} ~ ${endHH}:${endMM} (${durationHours}시간)`;
};

export const getTimeAgo = (isoDate: string): string => {
  const now = Date.now();
  const target = new Date(isoDate).getTime();

  const diffMs = now - target;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return `${diffSec}초`;
  if (diffMin < 60) return `${diffMin}분`;
  if (diffHour < 24) return `${diffHour}시간`;
  if (diffDay < 7) return `${diffDay}일`;

  return new Date(isoDate).toLocaleDateString('ko-KR');
};
