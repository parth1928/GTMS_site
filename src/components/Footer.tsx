import React from "react";
import { FaInstagram, FaLinkedin, FaFacebookF, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { icon: FaInstagram, link: "https://www.instagram.com/gtumotorsports/?hl=en", label: "Instagram" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/company/gtu-motorsports/", label: "LinkedIn" },
    { icon: FaFacebookF, link: "https://www.facebook.com/teamgtumotorsports/", label: "Facebook" },
    { icon: FaYoutube, link: "https://www.youtube.com/@GTMotorsports", label: "YouTube" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-orbitron mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a href="mailto:motorsports@gtu.edu.in" className="flex items-center hover:text-orange-500 transition-colors">
                <FaEnvelope className="mr-3" />
                motorsports@gtu.edu.in
              </a>
              <a href="https://maps.app.goo.gl/dDJJJTHwr8Pw1pqHA" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center hover:text-orange-500 transition-colors">
                <FaMapMarkerAlt className="mr-3" />
                Visit Us
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-orbitron mb-6">Connect With Us</h3>
            <div className="flex space-x-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-orange-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-orbitron mb-6">Location</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7309528476776!2d72.5907704758832!3d23.106942813173397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83202fa1e97f%3A0x3642d28e3ade4df0!2sDesign%20Innovation%20Centre%20(DIC)%20-%20Hub%20%2CGTU!5e0!3m2!1sen!2sin!4v1752600517936!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col items-center mb-4">
              <span className="font-orbitron text-2xl text-orange-500 font-black tracking-[0.2em] mb-1 leading-none">AGAINST</span>
              <span className="font-orbitron text-xl text-white font-black tracking-[0.15em] leading-none">ALL ODDS</span>
          </div>
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} GTU Motorsports. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
