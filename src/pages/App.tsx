import React from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "components/Header";
import SponsorshipForm from "components/SponsorshipForm";
import SponsorWall from "components/SponsorWall";
import AchievementsTimeline from "components/AchievementsTimeline";
import Footer from "components/Footer";

const Home = () => {
  const logoUrl = "/logos/gtmslogo.webp";
  const images = [
    "/images_home_page/1751911608043-328-86179948_513199829629663_7543422456929714176_n.png",
    "/images_home_page/1751911514343-537-82000289_492478235035156_2741253328959700992_n.png",
    "/images_home_page/IMG_2670.jpg",
    "/images_home_page/IMG_0877.jpg",
    "/images_home_page/1751911405063-367-48379285_217554835860832_105493102688468992_n.png",
  ];

  const targetRef = useRef(null);
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

  return (
    <>
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
            <motion.div
              key={src}
              className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${src})`,
                opacity: finalOpacity,
                scale,
              }}
            />
          );
        })}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        {/* Logo Section */}
        <div className="absolute z-20 w-full h-full flex flex-col items-center">
          <div className="relative group mt-4">
            {/* Subtle radial gradient background */}
            <div 
              className="absolute inset-0 -m-8 opacity-20 blur-xl"
              style={{
                background: "radial-gradient(circle at center, white 0%, transparent 70%)",
              }}
            />
            <img
              src={logoUrl}
              alt="GTU Motorsports Logo"
              className="w-[450px] h-auto relative"
              style={{
                filter: "brightness(1.1)",
              }}
            />
          </div>
          <div className="absolute bottom-[32rem] px-8 py-12 max-w-7xl mx-auto text-center text-white">
            <div>
              <h1 className="text-8xl font-extrabold tracking-tight uppercase font-orbitron whitespace-nowrap">
                NO WINGS. NO WORRIES.
              </h1>
            </div>
          </div>
          <div className="absolute bottom-8 px-8 py-12 max-w-7xl mx-auto text-center text-white">
            <div>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-white font-outfit leading-relaxed">
                We are GTU Motorsports — National Champions and ranked Top 50 globally in Formula Student. Built by passion. Backed by engineering. Racing since 2015.
              </p>
              <div className="flex flex-col mt-12 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center w-full">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[250px]"
                >
                  <Button
                    size="lg"
                    className="w-full px-8 py-6 text-lg font-bold text-white uppercase transition-all duration-300 bg-orange-600 rounded-none hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transform-gpu"
                  >
                    Become a Sponsor
                  </Button>
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[250px]"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full px-8 py-6 text-lg font-bold text-white uppercase bg-transparent border-2 border-white rounded-none transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform-gpu"
                  >
                    Explore The Legacy
                  </Button>
                </motion.div>
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
    </>
  );
};

export default Home;




