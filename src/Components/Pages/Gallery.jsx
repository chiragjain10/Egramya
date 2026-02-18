import React from 'react';
import { motion } from 'framer-motion';
import SEO from "../SEO";

const images = [
  {
    src: "",
    title: "Leadership Training",
    category: "Workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop",
    title: "Skill Development",
    category: "Training"
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    title: "Community Outreach",
    category: "Field Work"
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    title: "Digital Literacy",
    category: "Education"
  },
  {
    src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop",
    title: "Women Entrepreneurs",
    category: "Success Stories"
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop",
    title: "Group Discussions",
    category: "Community"
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#fff1f2] pt-24 pb-20 font-sans">
      <SEO 
        title="Gallery" 
        description="See the impact of Gramya's initiatives. Photos from training sessions, field visits, and success stories of rural women entrepreneurs."
        keywords="Gramya Gallery, VDC Photos, Rural Women Impact, Training Session Images"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#be123c] font-bold tracking-wider uppercase text-sm">Our Memories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#881337] mt-3 mb-6">Empowering Moments</h2>
          <div className="w-24 h-1 bg-[#fb7185] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#881337]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#fb7185] font-medium text-sm">{img.category}</span>
                <h3 className="text-white text-xl font-bold">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
