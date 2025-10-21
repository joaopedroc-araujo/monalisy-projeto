'use client';

import { ImgHTMLAttributes, memo, useMemo, useState } from 'react';
import { buildCloudinarySrcSet, buildCloudinaryUrl, hasCloudinaryConfig } from '@/lib/cloudinary';

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
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError' | 'sizes' | 'src' | 'alt'>;

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
  ...rest
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const hasCloudinary = useMemo(() => hasCloudinaryConfig(), []);

  const baseWidth = width ?? (fill ? 1280 : undefined);
  const baseHeight = height;

  const cropMode = baseWidth && baseHeight ? 'fill' : undefined;

  const transformedSrc = useMemo(() => {
    if (!hasCloudinary) {
      return src;
    }

    return buildCloudinaryUrl(src, {
      width: baseWidth,
      height: baseHeight,
      quality,
      cropMode: cropMode ?? (fill ? 'limit' : undefined),
    });
  }, [src, baseWidth, baseHeight, quality, fill, hasCloudinary, cropMode]);

  const srcSet = useMemo(() => {
    if (!hasCloudinary) {
      return undefined;
    }

    return buildCloudinarySrcSet(src, {
      width: baseWidth,
      height: baseHeight,
      quality,
      cropMode: cropMode ?? (fill ? 'limit' : undefined),
      breakpoints,
    });
  }, [src, baseWidth, baseHeight, quality, fill, breakpoints, hasCloudinary, cropMode]);

  const handleLoad: ImgHTMLAttributes<HTMLImageElement>['onLoad'] = (event) => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError: ImgHTMLAttributes<HTMLImageElement>['onError'] = () => {
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

  const imageProps: ImgHTMLAttributes<HTMLImageElement> = {
    src: transformedSrc,
    alt,
    className: imageClassName,
    loading: priority ? 'eager' : loading,
    fetchPriority: priority ? 'high' : undefined,
    decoding: 'async',
    onLoad: handleLoad,
    onError: handleError,
    sizes: sizes ?? '100vw',
    style: fill
      ? { position: 'absolute', inset: 0, width: '100%', height: '100%' }
      : undefined,
    ...(!fill && width ? { width } : {}),
    ...(!fill && height ? { height } : {}),
    ...(srcSet ? { srcSet } : {}),
    ...rest,
  };

  return (
    <div className={wrapperClassName}>
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${fill ? '' : className}`} />
      )}
      <img {...imageProps} />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
