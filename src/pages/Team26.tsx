import { motion } from "framer-motion";
import Header from "components/Header";
import Footer from "components/Footer";


const teamMembers = [
  { name: "Rohan Manna", role: "Captain", linkedin: "https://www.linkedin.com/in/rohanmanna31?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", img: "/team/rohan_manna.jpg" },
  { name: "Divang Mandal", role: "VD Head", linkedin: "https://www.linkedin.com/in/divang-mandal-5239a321a", img: "/team/Divang-Mandal.jpg" },
  { name: "Nairitya Tarnekar", role: "Chassis Head", linkedin: "https://www.linkedin.com/in/nairitya-tarnekar-798655287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/Nairitya-Tarnekar.jpg" },
  { name: "Vaibhav Thakkar", role: "EV PWT Head", linkedin: "https://www.linkedin.com/in/thakkar-vaibhav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Vraj Lakkad", role: "Chassis", linkedin: "https://www.linkedin.com/in/vraj-lakkad-54966a277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/VRAJ.jpg" },
  { name: "Swastik Shukla", role: "Chassis", linkedin: "https://www.linkedin.com/in/swastik-shukla-b7673b327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/swastik.jpg" }, 
  { name: "Parth Oza", role: "EV PWT", linkedin: "https://www.linkedin.com/in/parth-oza-7904b8228/", img: "/team/Parth-oza.jpg" },
  { name: "Prit Mevada", role: "EV PWT", linkedin: "https://www.linkedin.com/in/prit-mevada-0aab572b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/Prit.jpg" },
  { name: "Shlok Bhatt", role: "EV PWT", linkedin: "https://www.linkedin.com/in/shlok-bhatt-b6056a248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/shlok.jpg" },
  { name: "Harsh Chavda", role: "EV PWT", linkedin: "https://www.linkedin.com/in/harsh-chavda-410460251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/harsh.jpg" },
  { name: "Hem Vadgama", role: "EV PWT", linkedin: "https://www.linkedin.com/in/hem-vadgama-795456376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/Hem.jpg" },
  { name: "Parth Dalal", role: "EV PWT", linkedin: "https://www.linkedin.com/in/parth-dalal-988258248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/parth-dalal.jpg" },
  { name: "Srujan Ubbalapelli", role: "EV PWT", linkedin: "https://www.linkedin.com/in/srujan-ubbalapelli-111b16301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/srujanjpg.jpg" },
  
  { name: "Dhruvit Gohel", role: "VD", linkedin: "https://www.linkedin.com/in/dhruvit-gohel-74661330a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/Dhruvit-Gohel.jpg" },
  { name: "Dev Panchal", role: "VD", linkedin: "https://www.linkedin.com/in/dev-panchal-249a41359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/dev-panchal.jpg" },
  { name: "Samir Panchal", role: "VD", linkedin: "https://www.linkedin.com/in/samir-panchal-1bb77b270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/samir.jpg" },
  { name: "Prahit Shah", role: "VD", linkedin: "https://www.linkedin.com/in/prahit-shah-563632283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", img: "/team/Prahit-Shah.jpg" },
  
  ];

function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("").toUpperCase();
}

const Team26 = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black pt-24 sm:pt-32">
        <section className="container mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-orbitron mb-10 text-center"
          >
            Team-26
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-2xl hover:shadow-orange-500/30 transition-shadow duration-300 backdrop-blur-md bg-clip-padding"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
              >
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover shadow-xl mb-4 bg-gray-800 ring-2 ring-white/10 hover:ring-orange-400/40 transition duration-300"
                    style={{ backdropFilter: 'blur(2px)' }}
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-400 text-3xl font-bold text-white mb-4 shadow-xl ring-2 ring-white/10 hover:ring-orange-400/40 transition duration-300" style={{ backdropFilter: 'blur(2px)' }}>
                    {getInitials(member.name)}
                  </div>
                )}
                <div className="text-center">
                  <h2 className="text-xl font-bold text-white font-orbitron mb-1">{member.name}</h2>
                  <p className="text-orange-400 font-semibold mb-2">{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-outfit text-sm transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/></svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Team26;
