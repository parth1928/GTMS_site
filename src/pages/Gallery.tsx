import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "components/Header";
import Footer from "components/Footer";
import { FiX } from "react-icons/fi";
import Masonry from 'react-masonry-css';

interface GalleryImage {
  name: string;
  url: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const imagesPerBatch = 25;

  // Masonry breakpoints
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  // Load and process images batch by batch
  const loadImageBatch = async (images: GalleryImage[], startIndex: number, existingUrls = new Set<string>()) => {
    const endIndex = startIndex + imagesPerBatch;
    const batch = images.slice(startIndex, endIndex);
    
    // Filter out any duplicates before processing
    const uniqueBatch = batch.filter(image => !existingUrls.has(image.url));
    
    // Update the set of existing URLs
    uniqueBatch.forEach(image => existingUrls.add(image.url));

    if (uniqueBatch.length === 0) {
      // If this batch had no unique images and we still have more images, try the next batch
      if (endIndex < images.length) {
        requestAnimationFrame(() => {
          loadImageBatch(images, endIndex, existingUrls);
        });
      }
      return;
    }

    // Preload all images in this batch
    await Promise.all(
      uniqueBatch.map(
        (image) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = getThumbnailUrl(image.url);
          })
      )
    );

    // Add the batch to displayed images, ensuring no duplicates
    setDisplayedImages(prev => {
      const prevUrls = new Set(prev.map(img => img.url));
      const trulyUnique = uniqueBatch.filter(img => !prevUrls.has(img.url));
      return [...prev, ...trulyUnique];
    });

    // If there are more images, load the next batch
    if (endIndex < images.length) {
      // Load next batch after a slight delay to allow for rendering
      requestAnimationFrame(() => {
        loadImageBatch(images, endIndex, existingUrls);
      });
    }
  };

  // Initial load
  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/upload/gallery.json");
        const data: GalleryImage[] = await response.json();
        
        // First, ensure we have no duplicates in the source data
        const uniqueUrls = new Set<string>();
        const uniqueImages = data.filter(img => {
          if (uniqueUrls.has(img.url)) {
            console.log('Filtered duplicate:', img.url); // Debug log
            return false;
          }
          uniqueUrls.add(img.url);
          return true;
        });

        console.log('Total images:', data.length); // Debug log
        console.log('Unique images:', uniqueImages.length); // Debug log

        // Start loading batches with an empty Set to track loaded images
        loadImageBatch(uniqueImages, 0, new Set<string>());
      } catch (error) {
        console.error("Error loading gallery images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  // Cloudinary helper functions
  function getThumbnailUrl(fullUrl: string) {
    // Optimized thumbnail with fixed dimensions and good quality
    return `${fullUrl}?w=200,h=130,c_fill,g_auto,q_60,f_webp,dpr_1`;
  }
  // For the blur-up placeholder, keep the strong blur and tiny size
  function getPlaceholderUrl(fullUrl: string) {
    return `${fullUrl}?w=20,h=13,c_fill,g_auto,q_10,f_webp,dpr_1,e_blur:1000`;
    return `${fullUrl.split('upload/')[0]}upload/${transformations}/${fullUrl.split('upload/')[1]}`;
  }

  function getFullSizeUrl(fullUrl: string) {
    // Progressive loading for lightbox view with smart quality
    return `${fullUrl}?w=1280,h=853,c_fit,q_auto:good,f_auto,fl_progressive`;
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
        <style>{`
          .my-masonry-grid {
            display: flex;
            width: auto;
            margin-left: -16px; /* gutter size offset */
          }
          .my-masonry-grid_column {
            padding-left: 16px; /* gutter size */
            background-clip: padding-box;
          }
          .my-masonry-grid_column > div {
            margin-bottom: 16px;
          }
        `}</style>
        <section className="container mx-auto px-4 py-16">
          <Masonry
            breakpointCols={breakpointColumns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {displayedImages.map((image, index) => (
              <motion.div
                key={image.url}
                className="relative group cursor-pointer break-inside-avoid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 1) }}
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
                    {/* Blur-up LQIP placeholder */}
                    <img
                      src={getPlaceholderUrl(image.url)}
                      alt={image.name + ' placeholder'}
                      className="w-full h-auto object-cover absolute inset-0 transition-all duration-300"
                      style={{
                        filter: 'blur(20px)',
                        opacity: 1,
                        zIndex: 1,
                        pointerEvents: 'none',
                      }}
                    />
                    {/* Real thumbnail, fades in over placeholder */}
                    <img
                      src={getThumbnailUrl(image.url)}
                      alt={image.name}
                      loading="lazy"
                      className="w-full transition-all duration-300 group-hover:scale-105 bg-gray-900 relative"
                      style={{
                        opacity: 1,
                        zIndex: 2,
                        position: 'relative',
                        background: 'transparent',
                        display: 'block', // Ensure proper block display
                        width: '100%',    // Full width
                      }}
                      onLoad={e => {
                        // Fade out the placeholder when loaded
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          const placeholder = parent.querySelector('img[alt$="placeholder"]') as HTMLImageElement;
                          if (placeholder) {
                            placeholder.style.opacity = '0';
                            placeholder.style.transition = 'opacity 0.4s';
                          }
                        }
                      }}
                      onError={e => {
                        const img = e.target as HTMLImageElement;
                        img.src = `${image.url}?w=400,q_auto:low,f_auto`;
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
            </Masonry>
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
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-2xl bg-gray-900"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = `${selectedImage.url}?q_auto:good,f_auto`;
                  }}
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