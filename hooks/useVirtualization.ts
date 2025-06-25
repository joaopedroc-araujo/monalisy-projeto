import { useMemo, useState, useEffect, useCallback } from 'react';

interface UseVirtualizationProps {
  itemCount: number;
  itemSize: number;
  containerSize: number;
  overscan?: number;
}

interface VirtualItem {
  index: number;
  start: number;
  size: number;
}

export function useVirtualization({
  itemCount,
  itemSize,
  containerSize,
  overscan = 3
}: UseVirtualizationProps) {
  const [scrollOffset, setScrollOffset] = useState(0);

  const visibleRange = useMemo(() => {
    const start = Math.floor(scrollOffset / itemSize);
    const end = Math.min(
      itemCount - 1,
      Math.ceil((scrollOffset + containerSize) / itemSize)
    );

    return {
      start: Math.max(0, start - overscan),
      end: Math.min(itemCount - 1, end + overscan)
    };
  }, [scrollOffset, itemSize, containerSize, itemCount, overscan]);

  const virtualItems = useMemo(() => {
    const items: VirtualItem[] = [];
    for (let i = visibleRange.start; i <= visibleRange.end; i++) {
      items.push({
        index: i,
        start: i * itemSize,
        size: itemSize
      });
    }
    return items;
  }, [visibleRange, itemSize]);

  const totalSize = itemCount * itemSize;

  const scrollToIndex = useCallback((index: number) => {
    const offset = index * itemSize;
    setScrollOffset(Math.max(0, Math.min(offset, totalSize - containerSize)));
  }, [itemSize, totalSize, containerSize]);

  return {
    virtualItems,
    totalSize,
    scrollOffset,
    setScrollOffset,
    scrollToIndex,
    visibleRange
  };
}