import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from "../SEO";

const images = [
  
  { src: "/img/gallery/a (2).jpeg" },
 
  { src: "/img/gallery/a (4).jpeg" },
  { src: "/img/gallery/a (5).jpeg" },
  { src: "/img/gallery/a (7).jpeg" },
  { src: "/img/gallery/a (10).jpeg" },
  { src: "/img/gallery/a (11).jpeg" },
  { src: "/img/gallery/a (12).jpeg" },
  { src: "/img/gallery/a (14).jpeg" },
  { src: "/img/gallery/a (15).jpeg" },
  { src: "/img/gallery/a (17).jpeg" },
  { src: "/img/gallery/a (18).jpeg" },
  { src: "/img/gallery/a (19).jpeg" },
  // { src: "/img/gallery/a (20).jpeg" },
  { src: "/img/gallery/a (21).jpeg" },
  // { src: "/img/gallery/a (22).jpeg" },
  { src: "/img/gallery/a (23).jpeg" },
  // { src: "/img/gallery/a (24).jpeg" },
  { src: "/img/gallery/a (25).jpeg" },
  // { src: "/img/gallery/a (26).jpeg" },
  // { src: "/img/gallery/a (27).jpeg" },
  { src: "/img/gallery/a (28).jpeg" },
  // { src: "/img/gallery/a (29).jpeg" },
  // { src: "/img/gallery/a (30).jpeg" },
  { src: "/img/gallery/a (31).jpeg" },
  { src: "/img/gallery/a (32).jpeg" },
  { src: "/img/gallery/a (33).jpeg" },
  // { src: "/img/gallery/a (34).jpeg" },
  { src: "/img/gallery/a (35).jpeg" },
  { src: "/img/gallery/a (38).jpeg" },
  { src: "/img/gallery/a (39).jpeg" },
  { src: "/img/gallery/a (40).jpeg" },
  { src: "/img/gallery/a (41).jpeg" },
  { src: "/img/gallery/a (42).jpeg" },
  { src: "/img/gallery/a (43).jpeg" },
];


const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <div className="min-h-screen bg-[#fff1f2] pt-24 pb-20 font-sans">
      <SEO 
        title="Gallery" 
        description="See the impact of Gramya's initiatives. Photos from training sessions, field visits, and success stories of rural women entrepreneurs."
        keywords="Gramya Gallery, VDC Photos, Rural Women Impact, Training Session Images"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#be123c] font-bold tracking-wider uppercase text-sm">
            Our Memories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#881337] mt-3 mb-6">
            Empowering Moments
          </h2>
          <div className="w-24 h-1 bg-[#fb7185] mx-auto rounded-full"></div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.slice(0, visibleCount).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title || "Gallery image"} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#881337]/90 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                flex flex-col justify-end p-6"
              >
                {img.category && (
                  <span className="text-[#fb7185] font-medium text-sm">
                    {img.category}
                  </span>
                )}
                {img.title && (
                  <h3 className="text-white text-xl font-bold">
                    {img.title}
                  </h3>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        {visibleCount < images.length && (
          <div className="text-center mt-14">
            <button
              onClick={handleLoadMore}
              className="px-10 py-3 rounded-full 
              bg-[#be123c] text-white font-semibold 
              hover:bg-[#881337] transition duration-300 shadow-lg"
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
