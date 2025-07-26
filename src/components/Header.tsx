import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team-26", href: "/team26" },
  { name: "Supporters", href: "/supporters" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const logoUrl = "/logos/gtmslogo.webp";
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Update headerStyle based on hover state
  const getBackgroundOpacity = () => {
    if (isHomePage) {
      return (visible || isOpen) ? "0.95" : "0";
    }
    return isHovered ? "0.4" : "0.25";
  };

  useEffect(() => {
    if (location.pathname === '/supporters' && location.state?.scrollToForm) {
      setTimeout(() => {
        document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show header after scrolling 90% of the viewport height on home page
    // Show header after scrolling a small amount on other pages
    if (isHomePage) {
      setVisible(latest > window.innerHeight * 0.9);
    } else {
      setVisible(latest > 50);
    }
  });

  const headerStyle = {
    background: `rgba(10, 10, 10, ${getBackgroundOpacity()})`,
    backdropFilter: !isHomePage || visible || isOpen ? "blur(12px)" : "none",
    WebkitBackdropFilter: !isHomePage || visible || isOpen ? "blur(12px)" : "none",
    borderBottom: !isHomePage ? "1px solid rgba(255, 255, 255, 0.1)" : (visible || isOpen ? "1px solid rgba(255, 255, 255, 0.1)" : "none"),
    transition: "all 0.3s ease",
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 sm:h-20 md:h-24 px-4 sm:px-6 md:px-8"
        style={headerStyle}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: isHomePage ? "-100%" : 0, opacity: isHomePage ? 0 : 1 },
        }}
        animate={visible || !isHomePage ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => !isHomePage && setIsHovered(true)}
        onMouseLeave={() => !isHomePage && setIsHovered(false)}
      >
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logoUrl} 
              alt="GTU Motorsports Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto filter contrast-125 brightness-125" 
              style={{
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
              }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden lg:flex">
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
                  animate={{ scaleX: location.pathname === link.href ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            className="hidden lg:flex px-6 h-12 text-sm font-bold text-white uppercase transition-all duration-300 transform bg-orange-600 rounded-none hover:bg-orange-500 hover:scale-105 items-center justify-center"
            onClick={() => {
              if (location.pathname === '/supporters') {
                document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/supporters', { replace: true, state: { scrollToForm: true } });
              }
            }}
          >
            Become a Supporter
          </Button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white focus:outline-none"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full bg-white block transition-transform origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-full bg-white block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full bg-white block transition-transform origin-center"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <nav className="relative h-full flex flex-col items-center justify-center p-4">
              <ul className="space-y-6 text-center">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className="text-2xl font-medium tracking-wider text-gray-300 uppercase transition-colors duration-300 font-outfit hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      if (location.pathname === '/supporters') {
                        document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        navigate('/supporters', { replace: true, state: { scrollToForm: true } });
                      }
                    }}
                    className="mt-6 px-8 py-6 text-lg font-bold text-white uppercase transition-all duration-300 bg-orange-600 hover:bg-orange-500 rounded-none w-full"
                  >
                    Become a Supporter
                  </Button>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;





