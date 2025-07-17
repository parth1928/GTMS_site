import { motion } from "framer-motion";
import Header from "components/Header";
import Footer from "components/Footer";

const Team26 = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black pt-24 sm:pt-32">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-orbitron mb-6">
              Team-26
            </h1>
            <div className="relative">
              {/* Construction animation */}
              <motion.div
                initial={{ rotate: -5 }}
                animate={{ rotate: 5 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                  ease: "easeInOut"
                }}
                className="absolute -top-12 -left-4 text-4xl"
              >
                🛠️
              </motion.div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 font-orbitron">
                  Under Construction
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team26;
