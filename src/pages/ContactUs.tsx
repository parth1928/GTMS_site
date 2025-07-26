import React, { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "components/PageLayout";
import { FaInstagram, FaLinkedin, FaFacebookF, FaYoutube, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  purpose: "join" | "support" | "technical" | "general" | "";
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: ""
  });

  const socialLinks = [
    { 
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/gtumotorsports/?hl=en",
      color: "hover:text-pink-500",
      followers: "3K+ Followers"
    },
    { 
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/gtu-motorsports/?originalSubdomain=in",
      color: "hover:text-blue-500",
      followers: "500+ Connections"
    },
    { 
      name: "Facebook",
      icon: FaFacebookF,
      link: "https://www.facebook.com/teamgtumotorsports/",
      color: "hover:text-blue-600",
      followers: "500+ Followers"
    },
    { 
      name: "YouTube",
      icon: FaYoutube,
      link: "https://www.youtube.com/@GTMotorsports",
      color: "hover:text-red-500",
      subscribers: "800+ Subscribers"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const purposeDetails = {
    join: {
      title: "Join Our Team",
      description: "Become part of our dynamic racing team and contribute to engineering excellence."
    },
    support: {
      title: "Sponsorship & Support",
      description: "Partner with us and support the future of motorsport engineering through sponsorship or other means of support."
    },
    technical: {
      title: "Technical Support",
      description: "Need technical assistance or have engineering queries? We're here to help."
    },
    general: {
      title: "General Inquiry",
      description: "Have questions about our team, events, or any other topic? Feel free to ask."
    }
  };

  return (
    <PageLayout>
        {/* Hero Section */}
        <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url("/images_home_page/_MG_4379.JPG")',
              filter: 'brightness(0.8)',
              backgroundPosition: 'center 30%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase font-orbitron mb-4 px-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-outfit max-w-2xl mx-auto px-4">
              Get in touch with GTU Motorsports for opportunities, sponsorship, or technical inquiries
            </p>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
            >
              <form 
                action="https://formsubmit.co/parthoza19@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_next" value="https://gtumotorsports.live/thank-you" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New contact form submission!" />
                <div>
                  <label className="block text-white font-outfit mb-2">Purpose of Contact</label>
                  <select
                    name="purpose"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-outfit focus:outline-none focus:border-orange-500 transition-colors"
                    required
                  >
                    <option value="" className="bg-gray-900">Select Purpose</option>
                    <option value="join" className="bg-gray-900">Join the Team</option>
                    <option value="support" className="bg-gray-900">Sponsorship/Support</option>
                    <option value="technical" className="bg-gray-900">Technical Support</option>
                    <option value="general" className="bg-gray-900">General Inquiry</option>
                  </select>
                </div>

                {formData.purpose && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <h3 className="text-xl font-orbitron text-white mb-2">
                      {purposeDetails[formData.purpose as keyof typeof purposeDetails]?.title}
                    </h3>
                    <p className="text-gray-300 font-outfit">
                      {purposeDetails[formData.purpose as keyof typeof purposeDetails]?.description}
                    </p>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-outfit mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-outfit focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-outfit mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-outfit focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-outfit mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-outfit focus:outline-none focus:border-orange-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-outfit mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white font-outfit focus:outline-none focus:border-orange-500 transition-colors"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-lg transition-colors font-outfit"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Social Media Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-orbitron text-white mb-6">Connect With Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors group"
                    >
                      <div className={`p-4 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors ${social.color}`}>
                        <social.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-outfit">{social.name}</h3>
                        <p className="text-sm text-gray-400">
                          {social.followers || social.subscribers}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-orbitron text-white mb-6">Direct Contact</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:motorsports@gtu.edu.in"
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="p-4 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h3 className="font-outfit">Email Us</h3>
                      <p className="text-sm text-gray-400">motorsports@gtu.edu.in</p>
                    </div>
                  </a>

                  <motion.a
                    href="/brochure/GTU_Motorsports_Sponsorship_2025.pdf"
                    download
                    className="flex items-center space-x-4 text-orange-500 hover:text-orange-400 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-4 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-outfit">Download Brochure</h3>
                      <p className="text-sm text-orange-500/70">Sponsorship Information (PDF)</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-orbitron text-white mb-6">Visit Us</h2>
                <a
                  href="https://maps.app.goo.gl/4XgV1UiNRUaBnV9r7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="p-4 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-outfit">Our Address</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Design Innovation Centre (DIC) - Hub, Shed-2,<br/>
                      Gujarat Technological University,<br/>
                      Ahmedabad, Gujarat 382424
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
    </PageLayout>
  );
};

export default ContactUs;
