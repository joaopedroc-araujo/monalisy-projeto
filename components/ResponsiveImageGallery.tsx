'use client';

import { useState, useCallback, useEffect, memo, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';
import ThumbnailNavigation from './ThumbnailNavigation';
import { useDebounce } from '@/hooks/useDebounce';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface ResponsiveImageGalleryProps {
  images: GalleryImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showThumbnails?: boolean;
  showControls?: boolean;
  showProgressIndicators?: boolean;
  className?: string;
  thumbnailSize?: number;
  enableVirtualization?: boolean;
}

const ResponsiveImageGallery = memo(({
  images,
  autoPlay = true,
  autoPlayInterval = 4000,
  showThumbnails = true,
  showControls = true,
  showProgressIndicators = true,
  className = '',
  thumbnailSize = 80,
  enableVirtualization = false
}: ResponsiveImageGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Memoize current image data
  const currentImageData = useMemo(() => images[currentImage], [images, currentImage]);

  // Navigation functions
  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentImage(index);
      setIsLoading(true);
    }
  }, [images.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered || images.length <= 1) return;

    const interval = setInterval(nextImage, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextImage, autoPlayInterval, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevImage();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextImage();
        break;
      case ' ':
        e.preventDefault();
        setIsPlaying(!isPlaying);
        break;
      case 'Escape':
        e.preventDefault();
        setIsPlaying(false);
        break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage, isPlaying]);

  // Touch/swipe handling
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Image loading handlers
  const handleImageLoad = useCallback((imageIndex: number) => {
    if (imageIndex === currentImage) {
      setIsLoading(false);
    }
    // Remove from error set if it was there
    setImageErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageIndex);
      return newSet;
    });
  }, [currentImage]);

  const handleImageError = useCallback((imageIndex: number) => {
    console.error(`Failed to load image at index ${imageIndex}:`, images[imageIndex]?.src);
    if (imageIndex === currentImage) {
      setIsLoading(false);
    }
    // Add to error set
    setImageErrors(prev => new Set(prev).add(imageIndex));
  }, [currentImage, images]);

  // Toggle play/pause
  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Reset loading state when current image changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentImage]);

  if (!images.length) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-2xl">
        <p className="text-gray-500">Nenhuma imagem disponível</p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Main Gallery Container */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Galeria de imagens"
        aria-live="polite"
      >
        {/* Main Image Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
              <div className="text-gray-400">Carregando...</div>
            </div>
          )}

          {/* Images */}
          {images.map((image, index) => {
            const hasError = imageErrors.has(index);
            const isCurrentImage = index === currentImage;

            return (
              <div
                key={`${image.id}-${index}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isCurrentImage ? 'opacity-100 z-20' : 'opacity-0 z-10'
                }`}
                aria-hidden={!isCurrentImage}
              >
                {hasError ? (
                  // Error fallback
                  <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="text-lg mb-2">Erro ao carregar imagem</div>
                      <div className="text-sm opacity-75">
                        {image.alt || 'Imagem não disponível'}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-center"
                      priority={index === 0}
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageError(index)}
                      unoptimized={true} // Temporary fix for external URLs
                    />

                    {/* Gradient Overlay for Caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Caption */}
                    {image.caption && (
                      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-30">
                        <p className="text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-lg">
                          {image.caption}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}

          {/* Navigation Controls */}
          {showControls && images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className={`
                  absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30
                  w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 text-white
                  rounded-full flex items-center justify-center transition-all duration-300
                  backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50
                  ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                `}
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className={`
                  absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30
                  w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 text-white
                  rounded-full flex items-center justify-center transition-all duration-300
                  backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50
                  ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                `}
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Play/Pause Control */}
              <button
                onClick={togglePlayPause}
                className={`
                  absolute top-3 sm:top-6 right-3 sm:right-6 z-30
                  w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 text-white
                  rounded-full flex items-center justify-center transition-all duration-300
                  backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}
                aria-label={isPlaying ? 'Pausar apresentação' : 'Iniciar apresentação'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                )}
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {showThumbnails && images.length > 1 && (
          <ThumbnailNavigation
            images={images}
            currentIndex={currentImage}
            onImageSelect={goToImage}
            className="mt-6 sm:mt-8"
            thumbnailSize={thumbnailSize}
            enableVirtualization={enableVirtualization}
          />
        )}

        {/* Progress Indicators */}
        {showProgressIndicators && images.length > 1 && (
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2" role="tablist">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`
                  h-1 rounded-full transition-all duration-300 focus:outline-none
                  focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
                  ${index === currentImage
                ? 'w-6 sm:w-8 bg-gray-900'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
              }
                `}
                role="tab"
                aria-selected={index === currentImage}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

ResponsiveImageGallery.displayName = 'ResponsiveImageGallery';

export default ResponsiveImageGallery;
