import React from "react";
import { motion } from "framer-motion";
import Header from "components/Header";
import Footer from "components/Footer";
import SponsorshipForm from "components/SponsorshipForm";

const Sponsors = () => {
  // Get all sponsor logos from the logos folder
  const sponsorLogos = [
    { name: "ANSYS", logo: "/logos/ANSYS_logo.png" },
    { name: "Avon Tyres", logo: "/logos/Avon_Tyres_logo_logotipo.png" },
    { name: "Balaji Wafers", logo: "/logos/BalajiWafersLogo.svg.png" },
    { name: "Balkrishna Tyres", logo: "/logos/Balkrishna_Tyres_Logo.svg.png" },
    { name: "Dassault Systèmes", logo: "/logos/Dassault_Systèmes_logo.svg.png" },
    { name: "Hoosier", logo: "/logos/hoosier-logo-png_seeklogo-392900.png", className: "h-24 w-auto" },
    { name: "JK Tyre", logo: "/logos/jk-tyre-logo-present-scaled.webp" },
    { name: "KTM", logo: "/logos/KTM-Logo.svg.png" },
    { name: "MATLAB", logo: "/logos/imgbin-matlab-mathworks-simulink-logo-computer-software-inform-tica-syE1kd05p5v2ZMbEhkaahvFhX.jpg" },
    { name: "OZ Racing", logo: "/logos/oz-racing-logo-png_seeklogo-104928.png" },
    { name: "Red Bull", logo: "/logos/RedBullEnergyDrink.svg.png" },
    { name: "Wilwood", logo: "/logos/Wilwood-DB-Logo.avif" },
    { name: "Siemens", logo: "/logos/Siemens_AG_logo.svg.webp" },
    { name: "Shore Rubber", logo: "/logos/ShoreRubber_email-signature-03.png" },
    { name: "Shorai", logo: "/logos/Shorai logo.webp" },
    { name: "Schroth Racing", logo: "/logos/SCHROTH_Racing_Logo_4c_neg_2007.webp" },
    { name: "newlpvt", logo: "/logos/newlpvt-logo1.png" },
    { name: "Aurora", logo: "/logos/cropped-halflogo-aurora.jpeg.jpg" },
    { name: "Partner 1", logo: "/logos/Screenshot 2025-07-07 174428-Picsart-AiImageEnhancer.png" },
    { name: "Partner 2", logo: "/logos/Screenshot 2025-07-07 133126-Picsart-AiImageEnhancer.png" },
    { name: "Partner 3", logo: "/logos/images.png" },
    { name: "Partner 4", logo: "/logos/images (1).png" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            style={{ 
              backgroundImage: 'url("/images_home_page/1751911822000-610-467423983_1638079047141730_5515608627569552858_n.png")',
              filter: 'brightness(0.9)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-extrabold tracking-tight uppercase font-orbitron mb-4">
              Our Sponsors
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-outfit max-w-2xl mx-auto px-4">
              Partners who have supported our journey in Formula Student racing
            </p>
          </div>
        </section>

        {/* Current Sponsors Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white font-orbitron mb-4">Previous & Current Sponsors</h2>
            <p className="text-lg text-gray-300 font-outfit max-w-3xl mx-auto">
              We are grateful for the support and trust of these industry leaders who have been instrumental in our success.
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {sponsorLogos.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                className="relative group cursor-pointer bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative aspect-[3/2] flex items-center justify-center p-4">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                  <motion.div
                    className="absolute inset-0 border-2 border-orange-500 rounded-xl opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-gray-900 text-center mt-4 font-outfit font-medium">{sponsor.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <SponsorshipForm />
      </div>
      <Footer />
    </>
  );
};

export default Sponsors;
