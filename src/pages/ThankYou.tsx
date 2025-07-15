import React from "react";
import { motion } from "framer-motion";
import Header from "components/Header";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
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
            className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
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
            className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="mb-8 text-orange-500"
            >
              <svg className="w-24 h-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6"
            >
              Thank You!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 font-outfit mb-12 max-w-2xl mx-auto"
            >
              Your message has been received. We appreciate your interest and will get back to you soon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/"
                className="inline-block px-8 py-4 text-lg font-bold text-white uppercase bg-orange-600 rounded-none hover:bg-orange-500 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Return Home
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
