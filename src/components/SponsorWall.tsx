import { motion } from "framer-motion";

const sponsors = [
  { name: "ANSYS", logo: "/logos/ANSYS_logo.png" },
  { name: "Avon Tyres", logo: "/logos/Avon_Tyres_logo_logotipo.png" },
  { name: "Balaji Wafers", logo: "/logos/BalajiWafersLogo.svg.png" },
  { name: "Balkrishna Tyres", logo: "/logos/Balkrishna_Tyres_Logo.svg.png" },
  { name: "Dassault Systèmes", logo: "/logos/Dassault_Systèmes_logo.svg.png" },
  { name: "Hoosier", logo: "/logos/hoosier-logo-png_seeklogo-392900.png", className: "h-24 w-auto" }, // Larger size for Hoosier
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

const SponsorWall = () => {
  return (
    <div id="sponsors" className="w-full py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white font-orbitron mb-4">
          OUR LEGACY OF PARTNERSHIPS
        </h2>
        <p className="text-gray-400 font-outfit mb-12 max-w-2xl mx-auto">
          We are proud to have been supported by these industry leaders throughout our journey. Their trust and support have been instrumental in our achievements since 2015.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              className="p-6 bg-white rounded-lg flex items-center justify-center border border-gray-200 hover:border-orange-500 shadow-md"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 20px rgba(234, 88, 12, 0.15)",
                transition: { duration: 0.2 }
              }}
            >
              <motion.img
                src={sponsor.logo}
                alt={sponsor.name}
                className={`${sponsor.className || 'h-16'} w-auto object-contain hover:brightness-105`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorWall;