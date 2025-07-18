import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "components/Header";
import Footer from "components/Footer";
import { FiX } from "react-icons/fi";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from 'react-masonry-css';

interface GalleryImage {
  name: string;
  url: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const imagesPerLoad = 25;
  const preloadThreshold = 1000;
  const [preloadedImages, setPreloadedImages] = useState<GalleryImage[]>([]);
  const [currentBatch, setCurrentBatch] = useState(0);

  // Preload the next two batches of images
  const preloadNextBatches = async (currentLength: number) => {
    const nextBatchStart = currentLength;
    const nextTwoBatches = allImages.slice(nextBatchStart, nextBatchStart + (imagesPerLoad * 2));
    
    if (nextTwoBatches.length === 0) return;

    // Start preloading these images
    const preloadPromises = nextTwoBatches.map(
      (image) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = getThumbnailUrl(image.url);
        })
    );

    try {
      await Promise.all(preloadPromises);
      setPreloadedImages(nextTwoBatches);
    } catch (error) {
      console.error('Error preloading images:', error);
    }
  };

  // Masonry breakpoints
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  useEffect(() => {
    const loadInitialImages = async () => {
      try {
        const response = await fetch("/upload/gallery.json");
        const data = await response.json();
        
        setAllImages(data);
        
        // Display first batch immediately
        const initialBatch = data.slice(0, imagesPerLoad);
        setDisplayedImages(initialBatch);
        setCurrentBatch(1);
        
        // Immediately start preloading next two batches
        const nextTwoBatches = data.slice(imagesPerLoad, imagesPerLoad * 3);
        setPreloadedImages(nextTwoBatches);
        
        // Start preloading the images
        nextTwoBatches.forEach(image => {
          const img = new Image();
          img.src = getThumbnailUrl(image.url);
        });
        
        setHasMore(data.length > imagesPerLoad);
      } catch (error) {
        console.error("Error loading gallery images:", error);
      }
    };

    loadInitialImages();
  }, []);

  const loadMore = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    try {
      // Use preloaded images if available
      if (preloadedImages.length > 0) {
        // Add the first batch of preloaded images
        const nextBatch = preloadedImages.slice(0, imagesPerLoad);
        setDisplayedImages(prev => [...prev, ...nextBatch]);
        
        // Increment batch counter
        setCurrentBatch(prev => prev + 1);
        
        // Update hasMore state
        setHasMore(currentBatch * imagesPerLoad < allImages.length - imagesPerLoad);
        
        // Immediately start preloading the next batches
        const nextBatchStart = (currentBatch + 1) * imagesPerLoad;
        preloadNextBatches(nextBatchStart);
      } else {
        // Fallback if no preloaded images (shouldn't normally happen)
        const currentLength = displayedImages.length;
        const nextImages = allImages.slice(currentLength, currentLength + imagesPerLoad);
        
        if (nextImages.length === 0) {
          setHasMore(false);
          return;
        }

        setDisplayedImages(prev => [...prev, ...nextImages]);
        setHasMore(currentLength + imagesPerLoad < allImages.length);
      }
    } catch (error) {
      console.error('Error loading more images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Improved scroll handler with smoother loading
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        if (isLoading || !hasMore) return;

        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const clientHeight = window.innerHeight;
        const distanceToBottom = scrollHeight - scrollTop - clientHeight;
        
        // Load more images when we're getting close to the preloaded content
        if (distanceToBottom <= preloadThreshold * 2) {
          loadMore();
        }
      }, 50); // Reduced throttle time for smoother experience
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isLoading, hasMore, displayedImages.length]);

  // Effect to ensure we always have next batches preloaded
  useEffect(() => {
    if (!isLoading && hasMore && preloadedImages.length < imagesPerLoad) {
      const nextBatchStart = (currentBatch + 1) * imagesPerLoad;
      preloadNextBatches(nextBatchStart);
    }
  }, [displayedImages, isLoading, hasMore]);

  // Cloudinary helper functions
  function getThumbnailUrl(fullUrl: string) {
    // Optimized thumbnails: smaller size, lower quality, faster loading
    return `${fullUrl}?w=350,h=250,c_fill,g_auto,q_auto:eco,f_auto,dpr_auto,e_blur:50`;
  }

  function getFullSizeUrl(fullUrl: string) {
    // High quality for lightbox view
    return `${fullUrl}?q_auto:best,f_auto,fl_progressive,dpr_auto,fl_keep_iptc`;
  }

  // Pre-load the next batch of images
  useEffect(() => {
    if (displayedImages.length > 0 && hasMore) {
      const nextBatch = allImages.slice(
        displayedImages.length,
        displayedImages.length + imagesPerLoad
      );
      nextBatch.forEach(image => {
        const img = new Image();
        img.src = getThumbnailUrl(image.url);
      });
    }
  }, [displayedImages, hasMore]);



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
          <InfiniteScroll
            dataLength={displayedImages.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<div className="h-4" />}
            endMessage={<div className="h-4" />}
            scrollThreshold="100px"
            style={{ overflow: 'visible' }}
            scrollableTarget="scrollableDiv"
          >
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
                      <img
                        src={getThumbnailUrl(image.url)}
                        alt={image.name}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105 bg-gray-900"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          // Retry with a more basic transformation if the first attempt fails
                          img.src = `${image.url}?w=350,q_auto:low,f_auto`;
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </Masonry>
          </InfiniteScroll>
        </section>        {/* Lightbox */}
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
