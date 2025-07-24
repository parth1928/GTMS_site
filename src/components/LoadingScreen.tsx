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
        {/* Racing stripe animation */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-[-150px] w-[300px] h-[3px] bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-[2px] transform -translate-y-1/2"
        />
        
        {/* Logo container with glow effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full" />
          <img
            src="/logos/gtmslogo.webp"
            alt="GTU Motorsports Logo"
            className="w-32 h-32 object-contain relative z-10"
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-6"
        >
          <h2 className="text-white font-orbitron text-xl">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              FIRING UP ENGINES
            </motion.span>
          </h2>
        </motion.div>

        {/* Speed lines decoration */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: [0, 1, 0], x: 50 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="absolute left-1/2 h-[1px] w-20 bg-orange-500/30"
            style={{
              top: `${45 + i * 10}%`,
              transform: 'translateX(-50%) rotate(-45deg)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
