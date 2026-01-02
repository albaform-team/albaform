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
