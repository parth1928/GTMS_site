import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProgressiveBackgroundProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  initialOpacity?: number;
  finalOpacity?: any; // framer-motion MotionValue
  scale?: any; // framer-motion MotionValue
}

const ProgressiveBackground: React.FC<ProgressiveBackgroundProps> = ({
  src,
  className = '',
  style = {},
  initialOpacity = 1,
  finalOpacity,
  scale = 1,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurredSrc, setBlurredSrc] = useState('');

  useEffect(() => {
    // Create tiny version of the image URL by adding transformation parameters
    // Format: /upload/w_50,e_blur:100/
    const generateBlurredUrl = (url: string) => {
      const basePath = url.startsWith('/') ? '' : '/';
      return `${basePath}api/blur${url}?w=50`;
    };

    setBlurredSrc(generateBlurredUrl(src));

    // Preload the full-size image
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <motion.div
      className={`${className} transition-[filter] duration-1000`}
      style={{
        ...style,
        backgroundImage: `url(${isLoaded ? src : blurredSrc})`,
        filter: isLoaded ? 'none' : 'blur(20px) brightness(0.8)',
        opacity: finalOpacity,
        scale,
      }}
    />
  );
};

export default ProgressiveBackground;
