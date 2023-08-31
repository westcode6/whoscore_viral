import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
export const PlayListCard = ({ playListAlbum, playListTitle }) => {
  return (
    <>
      <motion.div
        variants={fadeIn("left", "spring", 0.3, 0.75)}
        // animation pattern
        className=""
      >
        <div className="shadow-2xl rounded-xl transform transition ease-in hover:-translate-y-1 relative">
          <img
            src={playListAlbum}
            alt="banner"
            className="w-28 h-24 object-center object-cover rounded-xl"
          />

          <div className="absolute  bottom-2 left-0 p-2 rounded-2xl  w-full h-fit flex flex-col items-start justify-start ">
            <h3 className="text-[10px] font-bold  text-neutral-50">
              {playListTitle}
            </h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};
