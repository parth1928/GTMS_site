import { motion } from "framer-motion";

interface Supporter {
  name: string;
  logo: string;
  scale?: number;
}

interface SupporterWithLink extends Supporter {
  link?: string;
}

const supporters: SupporterWithLink[] = [
  { 
    name: "VI-grade", 
    logo: "/logos/vi-grade_red (1).svg",
    link: "https://www.vi-grade.com/",
    scale: 1.02
  },
  { 
    name: "ANSYS", 
    logo: "/logos/ANSYS_logo.png",
    link: "https://www.ansys.com/"
  },
  { 
    name: "Avon Tyres", 
    logo: "/logos/Avon_Tyres_logo_logotipo.png",
    link: "https://www.avontyres.com/"
  },
  { 
    name: "Balaji Wafers", 
    logo: "/logos/BalajiWafersLogo.svg.png",
    link: "https://www.balajiwafers.com/"
  },
  { 
    name: "Balkrishna Tyres", 
    logo: "/logos/Balkrishna_Tyres_Logo.svg.png",
    link: "https://www.bkt-tires.com/"
  },
  { 
    name: "Dassault Systèmes", 
    logo: "/logos/Dassault_Systèmes_logo.svg.png",
    link: "https://www.3ds.com/"
  },
  { 
    name: "Hoosier", 
    logo: "/logos/hoosier-logo-png_seeklogo-392900.png",
    link: "https://www.hoosiertire.com/",
    scale: 1.25 
  },
  { 
    name: "JK Tyre", 
    logo: "/logos/jk-tyre-logo-present-scaled.webp",
    link: "https://www.jktyre.com/"
  },
  { 
    name: "KTM", 
    logo: "/logos/KTM-Logo.svg.png",
    link: "https://www.ktm.com/"
  },
  { 
    name: "MATLAB", 
    logo: "/logos/imgbin-matlab-mathworks-simulink-logo-computer-software-inform-tica-syE1kd05p5v2ZMbEhkaahvFhX.jpg",
    link: "https://www.mathworks.com/products/matlab.html"
  },
  { 
    name: "OZ Racing", 
    logo: "/logos/oz-racing-logo-png_seeklogo-104928.png",
    link: "https://www.ozracing.com/"
  },
  { 
    name: "Red Bull", 
    logo: "/logos/RedBullEnergyDrink.svg.png",
    link: "https://www.redbull.com/"
  },
  { 
    name: "Wilwood", 
    logo: "/logos/Wilwood-DB-Logo.avif",
    link: "https://www.wilwood.com/"
  },
  { 
    name: "Siemens", 
    logo: "/logos/Siemens_AG_logo.svg.webp",
    link: "https://www.siemens.com/"
  },
  { 
    name: "Shore Rubber", 
    logo: "/logos/ShoreRubber_email-signature-03.png",
    link: "https://www.shorerubber.com/"
  },
  { 
    name: "Shorai", 
    logo: "/logos/Shorai logo.webp",
    link: "https://shoraipower.com/"
  },
  { 
    name: "Schroth Racing", 
    logo: "/logos/SCHROTH_Racing_Logo_4c_neg_2007.webp",
    link: "https://www.schroth.com/en/racing"
  },
  { 
    name: "Gajjar Industries", 
    logo: "/logos/newlpvt-logo1.png",
    link: "https://www.gajjarindustries.in/"
  },
  { name: "Aurora", logo: "/logos/cropped-halflogo-aurora.jpeg.jpg" },
  { name: "Partner 1", logo: "/logos/Screenshot 2025-07-07 174428-Picsart-AiImageEnhancer.png" },
  { name: "Partner 2", logo: "/logos/Screenshot 2025-07-07 133126-Picsart-AiImageEnhancer.png" },
  { 
    name: "igus", 
    logo: "/logos/images.png",
    link: "https://www.igus.in/"
  },
  { name: "Partner 4", logo: "/logos/images (1).png" }
];

const SupporterWall = () => {
  return (
    <div id="supporters" className="w-full py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-orbitron mb-3 sm:mb-4">
          OUR LEGACY OF PARTNERSHIPS
        </h2>
        <p className="text-gray-400 font-outfit mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
          We are proud to have been supported by these industry leaders throughout our journey. Their trust and partnership have been instrumental in our achievements since 2015.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4 md:px-6">
          {supporters.map((supporter) => (
            <motion.div
              key={supporter.name}
              className="p-3 sm:p-4 md:p-6 bg-white rounded-lg flex items-center justify-center border border-gray-200 hover:border-orange-500 shadow-md"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 20px rgba(234, 88, 12, 0.15)",
                transition: { duration: 0.2 }
              }}
            >
              {supporter.link ? (
                <a 
                  href={supporter.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <motion.img
                    src={supporter.logo}
                    alt={supporter.name}
                    className="h-8 sm:h-12 md:h-16 w-auto object-contain hover:brightness-105"
                    style={{ transform: `scale(${supporter.scale || 1})` }}
                    whileHover={{ 
                      scale: (supporter.scale || 1) * 1.05,
                      transition: { duration: 0.2 }
                    }}
                  />
                </a>
              ) : (
                <motion.img
                  src={supporter.logo}
                  alt={supporter.name}
                  className="h-8 sm:h-12 md:h-16 w-auto object-contain hover:brightness-105"
                  style={{ transform: `scale(${supporter.scale || 1})` }}
                  whileHover={{ 
                    scale: (supporter.scale || 1) * 1.05,
                    transition: { duration: 0.2 }
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupporterWall;