const DEFAULT_BREAKPOINTS = [320, 480, 640, 768, 1024, 1280, 1536, 1920];

type BuildUrlOptions = {
  width?: number;
  height?: number;
  quality?: number;
  cropMode?: 'fill' | 'fit' | 'limit';
  gravity?: 'auto' | 'face' | 'faces' | string;
};

const getCloudName = () => process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const createTransformationString = (options: BuildUrlOptions = {}) => {
  const transformations: string[] = ['f_auto', 'q_auto', 'dpr_auto'];

  if (options.quality) {
    transformations.splice(1, 1, `q_${Math.min(Math.max(options.quality, 1), 100)}`);
  }

  if (options.width) {
    transformations.push(`w_${Math.round(options.width)}`);
  }

  if (options.height) {
    transformations.push(`h_${Math.round(options.height)}`);
  }

  if (options.cropMode) {
    transformations.push(`c_${options.cropMode}`);
  } else if (options.width && options.height) {
    transformations.push('c_fill');
  }

  if (options.gravity || (options.cropMode === 'fill' && !options.gravity)) {
    transformations.push(`g_${options.gravity ?? 'auto'}`);
  }

  return transformations.join(',');
};

export const buildCloudinaryUrl = (src: string, options: BuildUrlOptions = {}) => {
  const cloudName = getCloudName();
  if (!cloudName || !src) {
    return src;
  }

  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/fetch/`;
  const transformationString = createTransformationString(options);
  const encodedSrc = encodeURIComponent(src);

  return `${baseUrl}${transformationString}/${encodedSrc}`;
};

type BuildSrcSetOptions = BuildUrlOptions & {
  breakpoints?: number[];
  maxWidth?: number;
};

export const buildCloudinarySrcSet = (src: string, options: BuildSrcSetOptions = {}) => {
  const cloudName = getCloudName();
  if (!cloudName || !src) {
    return '';
  }

  const breakpoints = (options.breakpoints ?? DEFAULT_BREAKPOINTS)
    .concat(options.width ? [options.width, options.width * 1.5] : [])
    .filter(Boolean)
    .map((value) => Math.round(Number(value)))
    .filter((value) => value > 0);

  const maxWidth = options.maxWidth ?? Math.max(options.width ?? 0, ...breakpoints);
  const uniqueBreakpoints = Array.from(new Set(breakpoints))
    .sort((a, b) => a - b)
    .filter((value) => value <= (maxWidth || value));

  const aspectRatio = options.width && options.height ? options.height / options.width : undefined;

  return uniqueBreakpoints
    .map((breakpoint) => {
      const height = aspectRatio ? breakpoint * aspectRatio : undefined;
      const url = buildCloudinaryUrl(src, {
        ...options,
        width: breakpoint,
        height,
      });
      return `${url} ${breakpoint}w`;
    })
    .join(', ');
};

export const hasCloudinaryConfig = () => Boolean(getCloudName());
