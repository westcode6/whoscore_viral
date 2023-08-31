import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
export const AdsBanner = ({ banner }) => {
  return (
    <motion.div variants={slideIn("left", "spring", 0.5, 0.75)}>
      <div className="w-full md:hidden mb-4 p-2">
        <img
          src={banner}
          alt="festiver of music"
          className="object-cover w-full h-28 rounded-2xl shadow-2xl"
        />
      </div>
    </motion.div>
  );
};
