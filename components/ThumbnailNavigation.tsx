'use client';

import { memo, useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useDebounce } from '@/hooks/useDebounce';
import { useVirtualization } from '@/hooks/useVirtualization';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

interface ThumbnailNavigationProps {
  images: GalleryImage[];
  currentIndex: number;
  onImageSelect: (index: number) => void;
  className?: string;
  thumbnailSize?: number;
  gap?: number;
  showScrollButtons?: boolean;
  enableVirtualization?: boolean;
  maxVisibleThumbnails?: number;
}

const ThumbnailNavigation = memo(({
  images,
  currentIndex,
  onImageSelect,
  className = '',
  thumbnailSize = 80,
  gap = 12,
  showScrollButtons = true,
  enableVirtualization = false,
  maxVisibleThumbnails = 10
}: ThumbnailNavigationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [thumbnailErrors, setThumbnailErrors] = useState<Set<number>>(new Set());

  // Calculate visible thumbnails based on container width
  const visibleThumbnailCount = useMemo(() => {
    if (containerWidth === 0) return 0;
    const availableWidth = containerWidth - (showScrollButtons ? 80 : 0); // Account for scroll buttons
    return Math.floor(availableWidth / (thumbnailSize + gap));
  }, [containerWidth, thumbnailSize, gap, showScrollButtons]);

  // Determine if we should show the +X overlay
  const shouldShowOverlay = useMemo(() => {
    return screenSize === 'mobile' && images.length > visibleThumbnailCount;
  }, [screenSize, images.length, visibleThumbnailCount]);

  // Calculate remaining images for overlay
  const remainingCount = useMemo(() => {
    if (!shouldShowOverlay) return 0;
    return Math.max(0, images.length - visibleThumbnailCount);
  }, [shouldShowOverlay, images.length, visibleThumbnailCount]);

  // Virtualization setup
  const virtualization = useVirtualization({
    itemCount: images.length,
    itemSize: thumbnailSize + gap,
    containerSize: containerWidth,
    overscan: 2
  });

  // Screen size detection
  const updateScreenSize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setScreenSize('mobile');
    } else if (width < 1024) {
      setScreenSize('tablet');
    } else {
      setScreenSize('desktop');
    }
  }, []);

  // Container resize observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(container);
    updateScreenSize();

    const handleResize = () => updateScreenSize();
    window.addEventListener('resize', handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [updateScreenSize]);

  // Auto-scroll to current thumbnail
  const scrollToThumbnail = useCallback((index: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const thumbnailPosition = index * (thumbnailSize + gap);
    const containerScrollWidth = container.scrollWidth;
    const containerClientWidth = container.clientWidth;

    // Calculate the ideal scroll position to center the thumbnail
    const idealScrollLeft = thumbnailPosition - (containerClientWidth / 2) + (thumbnailSize / 2);
    const maxScrollLeft = containerScrollWidth - containerClientWidth;
    const targetScrollLeft = Math.max(0, Math.min(idealScrollLeft, maxScrollLeft));

    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });

    setScrollPosition(targetScrollLeft);
  }, [thumbnailSize, gap]);

  // Debounced scroll handler
  const debouncedScrollHandler = useDebounce((scrollLeft: number) => {
    setScrollPosition(scrollLeft);
    if (enableVirtualization) {
      virtualization.setScrollOffset(scrollLeft);
    }
  }, 16);

  // Handle scroll events
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    debouncedScrollHandler(scrollLeft);
  }, [debouncedScrollHandler]);

  // Scroll navigation
  const scrollThumbnails = useCallback((direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollAmount = (thumbnailSize + gap) * 3; // Scroll 3 thumbnails at a time
    const newScrollLeft = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  }, [thumbnailSize, gap]);

  // Touch/drag handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const currentX = e.touches[0].clientX;
    const diff = dragStart - currentX;
    containerRef.current.scrollLeft = scrollPosition + diff;
  }, [isDragging, dragStart, scrollPosition]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
    case 'Enter':
    case ' ':
      e.preventDefault();
      onImageSelect(index);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      if (index > 0) {
        onImageSelect(index - 1);
      }
      break;
    case 'ArrowRight':
      e.preventDefault();
      if (index < images.length - 1) {
        onImageSelect(index + 1);
      }
      break;
    }
  }, [onImageSelect, images.length]);

  // Auto-scroll to current thumbnail when it changes
  useEffect(() => {
    scrollToThumbnail(currentIndex);
  }, [currentIndex, scrollToThumbnail]);

  // Image error handlers
  const handleThumbnailError = useCallback((index: number) => {
    console.error(`Failed to load thumbnail at index ${index}:`, images[index]?.src);
    setThumbnailErrors(prev => new Set(prev).add(index));
  }, [images]);

  const handleThumbnailLoad = useCallback((index: number) => {
    setThumbnailErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  }, []);

  // Render thumbnails
  const renderThumbnails = () => {
    const thumbnailsToRender = enableVirtualization ? virtualization.virtualItems :
      images.map((_, index) => ({ index, start: index * (thumbnailSize + gap), size: thumbnailSize }));

    return thumbnailsToRender.map(({ index }) => {
      const image = images[index];
      if (!image) return null;

      const isActive = index === currentIndex;
      const isLastVisible = shouldShowOverlay && index === visibleThumbnailCount - 1;
      const hasError = thumbnailErrors.has(index);

      return (
        <button
          key={`${image.id}-thumb-${index}`}
          onClick={() => onImageSelect(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`
            relative flex-shrink-0 transition-all duration-300 rounded-xl overflow-hidden
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
            ${isActive
          ? 'ring-3 ring-gray-900 ring-offset-2 scale-105 shadow-lg'
          : 'ring-2 ring-gray-200 hover:ring-gray-400 opacity-70 hover:opacity-100 hover:scale-102 shadow-sm hover:shadow-md'
        }
          `}
          style={{
            width: thumbnailSize,
            height: thumbnailSize,
            minWidth: thumbnailSize,
            minHeight: thumbnailSize
          }}
          aria-label={`Ver imagem ${index + 1}: ${image.alt}`}
          aria-current={isActive ? 'true' : 'false'}
          tabIndex={isActive ? 0 : -1}
        >
          {hasError ? (
            // Error fallback for thumbnail
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-gray-400 text-xs text-center">
                Erro
              </div>
            </div>
          ) : (
            <Image
              src={image.src}
              alt={image.alt}
              width={thumbnailSize}
              height={thumbnailSize}
              className="w-full h-full object-cover object-center"
              loading={index < 5 ? 'eager' : 'lazy'}
              quality={75}
              sizes={`${thumbnailSize}px`}
              onLoad={() => handleThumbnailLoad(index)}
              onError={() => handleThumbnailError(index)}
              unoptimized={true} // Temporary fix for external URLs
            />
          )}

          {/* Active indicator */}
          {isActive && !hasError && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
            </div>
          )}
        </button>
      );
    });
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = containerRef.current ?
    scrollPosition < (containerRef.current.scrollWidth - containerRef.current.clientWidth) : false;

  return (
    <div className={`relative ${className}`} role="region" aria-label="Navegação de miniaturas">
      {/* Scroll buttons */}
      {showScrollButtons && screenSize === 'mobile' && (
        <>
          <button
            onClick={() => scrollThumbnails('left')}
            disabled={!canScrollLeft}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
              w-10 h-10 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-gray-900
              rounded-full flex items-center justify-center transition-all duration-300
              border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900
              ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            aria-label="Rolar miniaturas para a esquerda"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollThumbnails('right')}
            disabled={!canScrollRight}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
              w-10 h-10 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-gray-900
              rounded-full flex items-center justify-center transition-all duration-300
              border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900
              ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            aria-label="Rolar miniaturas para a direita"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Thumbnail container */}
      <div className="flex justify-center">
        <div
          ref={containerRef}
          className={`
            flex gap-3 py-4 transition-all duration-300
            ${screenSize === 'mobile'
      ? 'overflow-x-auto scrollbar-hide px-4'
      : screenSize === 'tablet'
        ? 'justify-center px-8'
        : 'overflow-x-auto scrollbar-hide px-12'
    }
          `}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            ...(enableVirtualization && { width: virtualization.totalSize })
          }}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="tablist"
          aria-orientation="horizontal"
        >
          {renderThumbnails()}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
});

ThumbnailNavigation.displayName = 'ThumbnailNavigation';

export default ThumbnailNavigation;
