import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Cars", href: "/cars" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const logoUrl = "/logos/gtmslogo.webp";
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show header after scrolling 90% of the viewport height
    setVisible(latest > window.innerHeight * 0.9);
  });

  const headerStyle = {
    background: "rgba(10, 10, 10, 0.75)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-24 px-8"
      style={visible ? headerStyle : { background: "transparent" }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex items-center">
        <img 
          src={logoUrl} 
          alt="GTU Motorsports Logo" 
          className="h-12 w-auto filter contrast-125 brightness-125" 
          style={{
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
          }}
        />
      </div>
      <nav className="items-center hidden md:flex">
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <Link
                to={link.href}
                className="text-sm font-medium tracking-wider text-gray-300 uppercase transition-colors duration-300 font-outfit hover:text-white"
              >
                {link.name}
              </Link>
              <motion.div
                className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-orange-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center h-full">
        <Button className="hidden md:flex px-6 h-12 text-sm font-bold text-white uppercase transition-all duration-300 transform bg-orange-600 rounded-none hover:bg-orange-500 hover:scale-105 items-center justify-center">
          Become a Sponsor
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;





