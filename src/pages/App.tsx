import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import ProgressiveBackground from "components/ProgressiveBackground";
import Header from "components/Header";
import SponsorshipForm from "components/SponsorshipForm";
import SponsorWall from "components/SponsorWall";
import AchievementsTimeline from "components/AchievementsTimeline";
import Footer from "components/Footer";
import LoadingScreen from "components/LoadingScreen";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const logoUrl = "/logos/gtmslogo.webp";
  const images = [
    "/images_home_page/1751911608043-328-86179948_513199829629663_7543422456929714176_n.png",
    "/images_home_page/1751911514343-537-82000289_492478235035156_2741253328959700992_n.png",
    "/images_home_page/IMG_2670.jpg",
    "/images_home_page/IMG_0877.jpg",
    "/images_home_page/1751911405063-367-48379285_217554835860832_105493102688468992_n.png",
  ];

  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate sections for better control
  const sections = {
    hero: [0, 0.2],       // First image - hero content
    transition: [0.2, 0.25], // Transition
    achievements: [0.25, 0.8], // Achievements section with background images
    exit: [0.8, 1]        // Exit animation
  };

  // Hero content animations
  const contentOpacity = useTransform(scrollYProgress, 
    [sections.hero[0], sections.hero[1]], 
    [1, 0]
  );
  const contentY = useTransform(scrollYProgress, 
    [sections.hero[0], sections.hero[1]], 
    ["0%", "-25%"]
  );
  const contentScale = useTransform(scrollYProgress, 
    [sections.hero[0], sections.hero[1]], 
    [1, 0.95]
  );

  // Achievements animations
  const achievementsOpacity = useTransform(scrollYProgress,
    [sections.transition[0], sections.transition[1], sections.achievements[0], sections.achievements[1], sections.exit[0], sections.exit[1]],
    [0, 1, 1, 1, 1, 0]
  );
  const achievementsY = useTransform(scrollYProgress,
    [sections.transition[0], sections.transition[1], sections.achievements[0], sections.achievements[1], sections.exit[0], sections.exit[1]],
    ["25vh", "0vh", "0vh", "0vh", "0vh", "-25vh"]
  );

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = [logoUrl, ...images].map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = (err) => {
              console.error(`Failed to load image: ${src}`, err);
              reject(err);
            };
          });
        });

        await Promise.all(imagePromises);
        // Add a minimum loading time of 1.5 seconds for the animation
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error preloading images:', error);
        setLoadingError(true);
        // Still hide loading screen after error, but without delay
        setIsLoading(false);
      }
    };

    preloadImages();

    // Cleanup function
    return () => {
      setIsLoading(false);
      setLoadingError(false);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            {/* HERO SECTION */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        {/* Background Images */}
        {images.map((src, i) => {
          const totalImages = images.length;
          const start = i / totalImages;
          const end = (i + 1) / totalImages;
          const initialOpacity = i === 0 ? 1 : 0;
          const finalOpacity = useTransform(
            scrollYProgress,
            [start, start + 0.01, end - 0.05, end],
            [initialOpacity, 1, 1, 0]
          );
          // Only animate scale for the hero section (first image)
          const scale = i === 0
            ? useTransform(scrollYProgress, [0, sections.hero[1]], [1, 1.25])
            : 1;
          return (
            <ProgressiveBackground
              key={src}
              src={src}
              className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
              initialOpacity={initialOpacity}
              finalOpacity={finalOpacity}
              scale={scale}
            />
          );
        })}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        {/* Logo Section */}
        <div className="absolute z-20 w-full h-full flex flex-col items-center justify-start pt-8 sm:pt-12">
          {/* Logo and Tagline Container */}
          <div className="flex flex-col items-center gap-4 sm:gap-8">
            <div className="relative group">
              {/* Subtle radial gradient background */}
              <div 
                className="absolute inset-0 -m-4 sm:-m-8 opacity-20 blur-xl"
                style={{
                  background: "radial-gradient(circle at center, white 0%, transparent 70%)",
                }}
              />
              <img
                src={logoUrl}
                alt="GTU Motorsports Logo"
                className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto relative"
                style={{
                  filter: "brightness(1.1)",
                }}
              />
            </div>
            <div className="text-center text-white px-4 sm:px-8">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight uppercase font-orbitron break-words sm:whitespace-nowrap">
                NO WINGS. NO WORRIES.
              </h1>
            </div>
          </div>
          <div className="absolute bottom-4 sm:bottom-8 px-4 sm:px-8 py-6 sm:py-12 max-w-7xl mx-auto text-center text-white">
            <div>
              <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-white font-outfit leading-relaxed">
                We are GTU Motorsports — National Champions and ranked Top 50 globally in Formula Student. Built by passion. Backed by engineering. Racing since 2015.
              </p>
              <div className="flex flex-col mt-6 sm:mt-12 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center w-full">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-[250px]"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Button
                    size="lg"
                    className="w-full px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold text-white uppercase transition-all duration-300 bg-orange-600 rounded-none hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transform-gpu"
                  >
                    Become a Sponsor
                  </Button>
                </motion.a>
                <motion.a
                  href="#achievements"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-[250px]"
                  onClick={(e) => {
                    e.preventDefault();
                    const timelineSection = document.querySelector('.min-h-screen.bg-black:nth-child(3)');
                    timelineSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full px-8 py-6 text-lg font-bold text-white uppercase bg-transparent border-2 border-white rounded-none transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform-gpu"
                  >
                    Explore The Legacy
                  </Button>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline Section */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* Content */}
        <div className="relative z-20 w-full">
          <AchievementsTimeline />
        </div>
      </section>
              <SponsorWall />
              <SponsorshipForm />
              <Footer />
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
};

export default Home;




