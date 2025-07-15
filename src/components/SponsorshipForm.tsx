import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const whySponsorPoints = [
  "National Champions – Formula Bharat, Supra SAE",
  "Recognized Among Top 50 in Global Formula Student Rankings",
  "Proven Track Record – Dominant in endurance, design, and efficiency",
  "Massive Media Reach – Featured by Car News, ShutterDrives, and more"
];

const SponsorshipForm = () => {
  return (
    <div id="contact" className="w-full py-12 sm:py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Column: Why Sponsor Us? */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold font-orbitron leading-tight">
              BECOME A PART OF THE LEGACY
            </h2>
            <motion.a
              href="/brochure/GTU_Motorsports_Sponsorship_2025.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white transition-all duration-300 rounded-lg font-outfit whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
              </svg>
              Download Brochure
            </motion.a>
          </div>
          <div className="space-y-4 sm:space-y-6 text-gray-300 font-outfit text-center sm:text-left">
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto sm:mx-0">
              Join the journey of innovation, excellence, and engineering mastery. GTU Motorsports is more than a race team — we are a force driving the future of motorsports in India.
            </p>
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto sm:mx-0">
              With a legacy of championship victories, national acclaim, and relentless determination, we offer more than just a logo on a car — we offer a legacy to be part of.
            </p>
          </div>
          <ul className="space-y-3 sm:space-y-4 max-w-2xl mx-auto sm:mx-0">
            {whySponsorPoints.map((point) => (
              <li key={point} className="flex items-center text-sm sm:text-base">
                <CheckCircle2 className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mr-3 text-orange-500" />
                <span className="font-outfit">{point}</span>
              </li>
            ))}
          </ul>
          <p className="font-outfit text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
            By partnering with us, your brand aligns with high-performance engineering, innovation, and future-ready talent. Together, let's push the boundaries of what's possible — on and off the track.
          </p>
          <p className="text-base sm:text-lg font-orbitron text-orange-500 text-center sm:text-left">
            Fuel the drive. Shape the future. Become part of the GTU Motorsports legacy.
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="p-4 sm:p-6 md:p-8 rounded-lg bg-gray-900/50 border border-gray-800">
          <form 
            action="https://formsubmit.co/parthoza19@gmail.com" 
            method="POST" 
            className="space-y-6"
          >
            <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Sponsorship Inquiry!" />
            
            <h3 className="text-xl sm:text-2xl font-bold font-orbitron mb-6">Sponsorship Inquiry</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                <Input 
                  name="name" 
                  id="name" 
                  placeholder="Raj Patel" 
                  required 
                  className="h-9 sm:h-10" 
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="company" className="text-sm sm:text-base">Company / Organization</Label>
                <Input 
                  name="company" 
                  id="company" 
                  placeholder="TechMahindra Ltd." 
                  required 
                  className="h-9 sm:h-10"
                />
              </div>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
              <Input 
                name="email" 
                id="email" 
                type="email" 
                placeholder="raj.patel@techmahindra.com" 
                required 
                className="h-9 sm:h-10"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="phone" className="text-sm sm:text-base">Phone (Optional)</Label>
              <Input 
                name="phone" 
                id="phone" 
                type="tel" 
                placeholder="+91 98765 43210" 
                className="h-9 sm:h-10"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="message" className="text-sm sm:text-base">Message / Query</Label>
              <Textarea 
                name="message" 
                id="message" 
                placeholder="I represent TechMahindra and would like to explore partnership opportunities with GTU Motorsports..." 
                required 
                className="min-h-[100px] sm:min-h-[120px]"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 sm:py-4 text-sm sm:text-base font-bold text-white uppercase transition-all duration-300 bg-orange-600 rounded-none hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.5)]"
            >
              Send Inquiry
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipForm;
