import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const AboutUs = () => {
  const images = [
    "/images_home_page/_MG_4219.JPG",
    "/images_home_page/IMG_2670.jpg",
    "/images_home_page/_MG_4205.JPG"
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <Header />
      
      {/* Hero Section with Vision */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${images[0]})`,
            filter: 'brightness(0.8)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/40" />
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-orbitron font-bold text-center mb-8"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-center font-outfit leading-relaxed"
          >
            <p className="mb-6">
              Team GTU Motorsports is an extracurricular, student-run initiative dedicated to the
              development of a Formula style race car for the Formula Student competition. Our team
              consists of more than 50 students from 20 different colleges affiliated to GTU,
              bringing together aspiring engineering students from 1st to 4th year.
            </p>
            <p>
              The team's chain of command is analogous to a corporate firm, providing students with
              diverse fields of experience along with technical and practical knowledge. Our main
              objective is to build quality character while offering financial and managerial
              expertise that complements academics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-black to-blue-900/30"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(234,88,12,0.2), black, rgba(30,58,138,0.3))",
                "linear-gradient(to bottom right, rgba(30,58,138,0.3), black, rgba(234,88,12,0.2))",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>
        
        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-orbitron text-white text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Vision
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-transparent p-8 rounded-xl border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl" />
                <p className="text-white/90 font-outfit text-lg relative z-10">
                  The current engineering academics is being withheld by the limitations of orthodox
                  syllabus and teaching scheme. Team GTU Motorsports through this student project seeks to
                  enhance student knowledge and practical proficiency. The team sights all the members as an
                  engineer rather than engineering graduates.
                </p>
              </motion.div>
              <motion.div
                className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-transparent p-8 rounded-xl border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-blue-500/10 to-transparent rounded-xl" />
                <p className="text-white/90 font-outfit text-lg relative z-10">
                  Our goal for next season is to achieve first position in all statics as well as dynamic
                  events. The methodology is simple. Achieving subtle improvements in the design built and
                  fine tune performance by incorporating improved engineering practices.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${images[1]})`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/85 to-black/60" />
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron text-white text-center mb-12">Our Journey</h2>
            <div className="space-y-8 text-white/90 font-outfit">
              <p>
                Thoughts before actions, and idea before thought. Ideation, that is what set ablaze in
                mind of few engineering students, who took the step and founded the team GTU Motorsports.
              </p>
              <p>
                The days back then were of 2015, when the team locked in on their first goal, Formula
                Design Challenge 2015. The major challenge for the team was to recruit and manage students
                from over 50 colleges and the dawn was not bright.
              </p>
              <p>
                Since then, the team forged winning streaks in the endurance events. The name of GTU
                Motorsports was conjugated with the title "National Champions" in Supra SAE India 2017.
              </p>
              <p>
                The team continued to excel, becoming Runner Up and Endurance winner in Supra SAE India
                2018, followed by becoming the NATIONAL CHAMPION in Formula Bharat 2019. In Formula
                Bharat 2021, the team secured the overall 3rd position & 3rd in the Engineering Design
                Event, marking our highest positions in the statics category!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
