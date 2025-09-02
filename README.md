# 🚗 GTU Motorsports Official Website

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-yellow.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-blue.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11.17-pink.svg)](https://www.framer.com/motion/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.6-green.svg)](https://fastapi.tiangolo.com/)

Welcome to the official website of **GTU Motorsports** – Gujarat Technological University's premier Formula Student team! 🏎️ This dynamic, high-performance web platform showcases our engineering excellence, competitive achievements, and the passion that drives us to build world-class race cars from scratch.

## 🌟 About GTU Motorsports

Founded in 2015, GTU Motorsports is a student-run initiative dedicated to designing and manufacturing Formula-style race cars for international Formula Student competitions. With over 50 talented students from 20+ GTU-affiliated colleges, we bridge the gap between academic theory and real-world engineering practice.

**Our Mission:** To empower aspiring engineers through hands-on experience, fostering innovation, teamwork, and excellence in automotive design.

**Key Achievements:**
- 🏆 National Champions – Supra SAE India 2017
- 🥈 Runner-Up & Endurance Winners – Supra SAE India 2018
- 🥉 Overall 3rd Position – Formula Bharat 2019 & 2021
- 🌍 Ranked Top 50 globally in Formula Student

## ✨ Features

### 🏠 Homepage
- **Hero Section:** Stunning parallax scrolling backgrounds with our iconic "NO WINGS. NO WORRIES." tagline
- **Interactive Logos:** GTU and GTU Ventures logos with glassmorphism effects
- **Achievements Timeline:** Scroll through our competitive history
- **Supporter Wall:** Showcase our industry partners

### 📖 About Us
- **Team Overview:** Meet our diverse team of engineers and innovators
- **Vision & Goals:** Our commitment to engineering excellence
- **Journey Timeline:** From 2015 ideation to present-day champions

### 🖼️ Gallery
- **Photo Showcase:** High-quality images of our cars, events, and team activities
- **Progressive Loading:** Optimized image delivery with blur-up effects
- **Responsive Design:** Perfect viewing on all devices

### 🤝 Supporters
- **Partner Showcase:** Display logos and links to our sponsors
- **Support Form:** Easy way for potential partners to get in touch
- **Dynamic Grid:** Responsive layout for all screen sizes

### 👥 Team
- **Member Profiles:** Highlight our talented team members
- **Leadership Structure:** Corporate-style organization for real-world experience

### 📞 Contact Us
- **Interactive Form:** Seamless communication with the team
- **Social Links:** Connect with us on LinkedIn and other platforms
- **Location Info:** Find us at Gujarat Technological University

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** – Modern UI library with hooks and concurrent features
- **TypeScript 5.6.2** – Type-safe JavaScript for robust development
- **Vite 5.4.8** – Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.14** – Utility-first CSS framework for rapid styling
- **Framer Motion 11.11.17** – Powerful animation library for smooth interactions

### Backend
- **FastAPI 0.115.6** – High-performance Python web framework
- **Python 3.x** – Backend logic and API endpoints

### Additional Tools
- **ESLint** – Code linting for consistent quality
- **PostCSS** – CSS processing and optimization
- **React Router** – Client-side routing for SPA navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.8 or higher)
- Yarn package manager
- uv package manager (for Python dependencies)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/parth1928/GTMS_site.git
   cd GTMS_site
   ```

2. **Install dependencies:**
   ```bash
   make
   ```
   This command installs both frontend (yarn) and backend (uv) dependencies.

3. **Start the development servers:**

   **Backend (Terminal 1):**
   ```bash
   make run-backend
   ```
   Server runs on http://localhost:8000

   **Frontend (Terminal 2):**
   ```bash
   make run-frontend
   ```
   Development server runs on http://localhost:5173

4. **Open your browser:**
   Visit http://localhost:5173 to explore the website!

## 📁 Project Structure

```
GTMS_site/
├── backend/                 # FastAPI server
│   ├── main.py             # Main application entry point
│   ├── pyproject.toml      # Python dependencies
│   └── routers/            # API route handlers
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── assets/         # Static assets
│   ├── public/             # Public static files
│   └── package.json        # Node dependencies
├── Makefile                # Build and run scripts
└── README.md              # This file
```

## 🎨 Design Philosophy

Our website embodies the spirit of GTU Motorsports:
- **Performance:** Optimized for speed and responsiveness
- **Innovation:** Cutting-edge animations and interactions
- **Precision:** Clean, professional design with attention to detail
- **Team Spirit:** Vibrant colors and dynamic elements reflecting our energy

## 🤝 Contributing

We welcome contributions from fellow engineers and developers! Here's how you can get involved:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code style with ESLint
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**GTU Motorsports Team**
- **Website:** [gtumotorsports.com](https://gtumotorsports.com)
- **LinkedIn:** [GTU Motorsports](https://www.linkedin.com/company/gtu-motorsports/)
- **Email:** [contact@gtumotorsports.com](mailto:contact@gtumotorsports.com)
- **Location:** Gujarat Technological University, Ahmedabad, India

---

**Built with ❤️ by GTU Motorsports Team**

*Join us in the pursuit of engineering excellence! 🏁*
