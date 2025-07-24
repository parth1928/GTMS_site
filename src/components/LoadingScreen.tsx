import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  // Cleanup any animations when component unmounts
  React.useEffect(() => {
    return () => {
      // This ensures all animations are properly cleaned up
      const elements = document.querySelectorAll('.loading-animation');
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.animation = 'none';
        }
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-900 to-black z-50 flex items-center justify-center">
      <div className="relative">
        {/* Pulsing energy ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-[-50px] bg-gradient-to-r from-orange-500/20 via-orange-400/20 to-orange-500/20 rounded-full blur-2xl"
        />
        
        {/* Electric charge effect */}
        <motion.div
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-[-25px] bg-gradient-to-br from-orange-400/30 to-transparent rounded-full blur-md"
        />

        {/* Logo with glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-2xl transform scale-110" />
          <img
            src="/logos/gtmslogo.webp"
            alt="GTU Motorsports Logo"
            className="w-40 h-40 object-contain relative z-10 transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Loading progress circles */}
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-orange-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
