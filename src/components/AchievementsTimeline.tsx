import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    year: 2022,
    event: "FORMULA BHARAT",
    color: "orange",
    achievements: [
      "1st - Overall (out of 72 teams)",
      "1st - Endurance",
      "1st - Dynamic Events",
      "1st - Efficiency and Design"
    ]
  },
  {
    year: 2021,
    event: "FORMULA BHARAT",
    color: "orange",
    achievements: [
      "3rd - Design",
      "1st - Business Plan Pitch Deck",
      "5th - Overall (out of 82 teams)"
    ]
  },
  {
    year: 2020,
    event: "FORMULA BHARAT",
    color: "orange",
    achievements: [
      "1st - Acceleration",
      "1st - Endurance",
      "3rd - Overall (out of 58 teams)"
    ]
  },
  {
    year: 2019,
    event: "FORMULA BHARAT",
    color: "orange",
    achievements: [
      "1st - Overall Dynamics",
      "1st - Fuel Efficiency",
      "1st - Endurance",
      "1st - Overall (out of 75 teams)"
    ]
  },
  {
    year: 2018,
    event: "FORMULA BHARAT",
    color: "orange",
    achievements: [
      "6th - Design",
      "9th - Overall (out of 70 teams)"
    ]
  },
  {
    year: 2018,
    event: "SUPRA SAE INDIA",
    color: "yellow",
    achievements: [
      "1st - Endurance",
      "2nd - Overall (out of 120 teams)"
    ]
  },
  {
    year: 2017,
    event: "FORMULA BHARAT",
    color: "orange",
    achievements: [
      "5th - Endurance",
      "8th - Overall (out of 73 teams)"
    ]
  },
  {
    year: 2017,
    event: "SUPRA SAE INDIA",
    color: "yellow",
    achievements: [
      "1st - Endurance",
      "1st - Engineering Excellence",
      "1st - Overall (out of 111 teams)"
    ]
  },
  {
    year: 2016,
    event: "FORMULA STUDENT INDIA",
    color: "orange",
    achievements: [
      "18th - Design",
      "4th - Endurance",
      "9th - Overall (out of 47 teams)"
    ]
  },
  {
    year: 2016,
    event: "SUPRA SAE INDIA",
    color: "yellow",
    achievements: [
      "3rd - Autocross",
      "3rd - Acceleration",
      "9th - Overall (out of 123 teams)"
    ]
  },
  {
    year: 2015,
    event: "FORMULA DESIGN CHALLENGE",
    color: "orange",
    achievements: [
      "15th - Design",
      "18th - Overall (out of 75 teams)"
    ]
  },
  {
    year: 2015,
    event: "SUPRA SAE INDIA",
    color: "yellow",
    achievements: [
      "15th - Overall (out of 167 teams)"
    ]
  }
];

const AchievementsTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animate the timeline line height based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/images_home_page/_MG_3677.JPG")',
          opacity: 0.15,
        }}
      />
      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-orbitron uppercase text-white mb-16"
        >
          Our Legacy of Excellence
        </motion.h2>

        <div className="relative mx-4 md:mx-auto max-w-4xl">
          {/* Timeline line with scroll-based animation */}
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 md:w-1.5 bg-gradient-to-b from-orange-500 via-orange-500 to-orange-400 -translate-x-1/2"
            style={{ transformOrigin: "top" }}
          />

          {achievements.map((achievement, index) => {
            const isLeft = index % 2 === 0;
            // Remove delay for last 3 blocks
            const blockDelay = index < achievements.length - 3 ? index * 0.15 : 0;
            return (
              <motion.div
                key={`${achievement.year}-${achievement.event}`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: blockDelay, ease: "easeOut" }}
                className={`relative flex items-start mb-24 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Timeline dot, scroll-animated and perfectly centered - hidden on mobile */}
                <motion.div
                  className="absolute top-0 hidden md:block w-4 h-4 bg-orange-500 rounded-full z-10"
                  style={{ top: "calc(50% - 0.5rem)", left: "calc(50% - 7.2px)" }}
                >
                  <motion.div
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-full h-full bg-orange-500 rounded-full opacity-30"
                  />
                </motion.div>

                {/* Content */}
                <div className={`pl-12 md:pl-0 ${
                  isLeft ? "md:pr-12 md:w-1/2" : "md:pl-12 md:w-1/2"
                }`}>
                  <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-lg hover:border-orange-500/20 transition-colors duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-orange-500 font-orbitron">
                      {achievement.event} {achievement.year}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {achievement.achievements.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                          className="flex items-center text-white/90 font-outfit"
                        >
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsTimeline;
