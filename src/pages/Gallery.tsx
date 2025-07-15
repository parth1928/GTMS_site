import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "components/Header";
import Footer from "components/Footer";
import { FiX } from "react-icons/fi";

interface GalleryImage {
  name: string;
  url: string;
}

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch("/upload/gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(error => console.error("Error loading gallery images:", error));
  }, []);

  // Cloudinary helper functions
  function getThumbnailUrl(fullUrl: string) {
    return `${fullUrl}?w_800,h_500,c_fill,g_auto,q_auto:good,f_auto`;
  }

  function getFullSizeUrl(fullUrl: string) {
    return `${fullUrl}?q_auto,f_auto`;
  }



  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/images_home_page/_MG_4219.JPG")',
              filter: 'brightness(0.5)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-extrabold tracking-tight uppercase font-orbitron mb-4">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-outfit max-w-2xl mx-auto px-4">
              Capturing moments of innovation, dedication, and triumph in our racing journey
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4 space-y-4">
            {images.map((image, index) => (
              <motion.div
                key={image.url}
                className="relative group cursor-pointer break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => {
                  setSelectedImage(image);
                }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-lg bg-black/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={getThumbnailUrl(image.url)}
                      alt={image.name}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium truncate">{image.name}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-7xl mx-auto p-4"
                onClick={e => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button
                  className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <FiX size={24} />
                </button>
                <img
                  src={getFullSizeUrl(selectedImage.url)}
                  alt={selectedImage.name}
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-2xl"
                />

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
