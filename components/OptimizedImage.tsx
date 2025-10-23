'use client';

import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import { memo, useMemo, useState } from 'react';

import { hasCloudinaryConfig } from '@/lib/cloudinary';

type LoadingType = 'lazy' | 'eager';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: LoadingType;
  quality?: number;
  sizes?: string;
  fill?: boolean;
  breakpoints?: number[];
  onLoad?: () => void;
  onError?: () => void;
};

const OptimizedImage = memo(({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  quality,
  sizes,
  fill = false,
  breakpoints,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const hasCloudinary = useMemo(() => hasCloudinaryConfig(), []);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-gray-400 text-sm">Erro ao carregar</div>
      </div>
    );
  }

  const imageClassName = `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`;
  const wrapperClassName = fill ? `relative ${isLoading ? 'min-h-[1px]' : ''}` : 'relative';
  const isRemoteSrc = /^https?:\/\//i.test(src);

  const commonImageProps = {
    alt,
    className: imageClassName,
    priority,
    quality,
    sizes: sizes ?? '100vw',
    fill,
    width: !fill ? width : undefined,
    height: !fill ? height : undefined,
    loading: priority ? undefined : loading,
    fetchPriority: priority ? 'high' as const : undefined,
    onLoad: handleLoad,
    onError: handleError,
  };

  return (
    <div className={wrapperClassName}>
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${fill ? '' : className}`} />
      )}
      {hasCloudinary ? (
        <CldImage
          src={src}
          {...commonImageProps}
          deliveryType={isRemoteSrc ? 'fetch' : undefined}
          crop={fill || (width && height) ? { type: 'auto', source: true } : undefined}
          breakpoints={breakpoints}
        />
      ) : (
        <Image
          src={src}
          {...commonImageProps}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
