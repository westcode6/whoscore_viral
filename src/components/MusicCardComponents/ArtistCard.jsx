import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { BsHeartFill } from "react-icons/bs";
import {MdOutlineAddCircle} from "react-icons/md"
 export const ArtistCard = ({ artistName, songTitle, albumCover }) => {
    return (
      <>
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          // animation pattern
          className=""
        >
          <div className="w-36 md:w-44 bg-neutral-50 rounded-2xl  transform transition ease-in duration-100 hover:-translate-x-1 p-2 shadow m-1">
            <img
              src={albumCover}
              alt="banner"
              className="w-full h-24 object-center object-cover rounded-xl"
            />
              <span />
  
            <div className="w-full h-fit flex flex-col items-start justify-start p-2">
              <h3 className="text-[10px] font-semibold text-neutral-800">
                {songTitle}
              </h3>
              <p className="text-[9px] text-neutral-400">{artistName}</p>
            </div>

            
        <div className="w-full px-2 flex items-center justify-between gap-4">
              <p className="text-[9px] text-neutral-900 font-bold">
                32k
              </p>

              <p className="p-1 rounded-full shadow-md bg-neutral-100">
                {" "}
                <span className="text-[8px] text-red-500">
                  <BsHeartFill />
                </span>
              </p>

              <p className="p-1 hidden rounded-full shadow-md bg-neutral-200">
                {" "}
                <span className="text-xs text-neutral-700">
                  <MdOutlineAddCircle />
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </>
    );
  };