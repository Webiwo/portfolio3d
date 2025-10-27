import React from "react";
import { motion } from "framer-motion";

const ImageShowcase = ({ backgroundImage, authorImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full max-w-4xl rounded-2xl mx-auto overflow-hidden p-[1px] bg-gradient-to-b from-[#3fcca8] via-[#649bce] to-[#bd62fd] mt-16"
    >

      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 backdrop-blur-sm">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {authorImage && (
          <div className="absolute top-3 right-3 w-14 h-14 md:w-24 md:h-24 rounded-full border-2 border-white overflow-hidden shadow-lg">
            <img
              src={authorImage}
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageShowcase;


