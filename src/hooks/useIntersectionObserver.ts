import { RefObject, useEffect, useRef } from 'react';

export interface UseIntersectionObserverOptions<T extends HTMLElement> {
  rootRef?: RefObject<T | null> | null;
  onIntersect: (entry: IntersectionObserverEntry) => void;
  threshold?: number | number[];
  rootMargin?: string;
  enabled?: boolean;
}

const useIntersectionObserver = <T extends HTMLElement>({
  rootRef = null,
  onIntersect,
  threshold = 0.5,
  rootMargin = '0px',
  enabled = true,
}: UseIntersectionObserverOptions<T>) => {
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const target = targetRef.current;
    if (!target) return;

    const root = rootRef?.current ?? null;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) onIntersect(entry);
        });
      },
      { root, threshold, rootMargin }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [rootRef, onIntersect, threshold, rootMargin, enabled]);

  return targetRef;
};

export default useIntersectionObserver;
