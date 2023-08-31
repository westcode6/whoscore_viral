import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { BsHeartFill } from "react-icons/bs";
import {MdOutlineAddCircle} from "react-icons/md"
export default function Trending() {
  return (
    <>
      <div className="flex flex-col py-2">
        <div className="no-scrollbar w-full flex gap-3 items-start overflow-x-scroll">
          <TrendingArtistCard
            artistName={"Hally Valery"}
            songTitle={"Beautiful World in Mind"}
            albumCover={"/assets/emi.jpg"}
          />
          <TrendingArtistCard
            artistName={"Hally Valery"}
            songTitle={"Beautiful World in Mind"}
            albumCover={"/assets/ai.webp"}
          />
          <TrendingArtistCard
            artistName={"Manny Kulantuz"}
            songTitle={"Everything is alright"}
            albumCover={"/assets/www.webp"}
          />

          <TrendingArtistCard
            artistName={"Fav Cameloko"}
            songTitle={"Universe in me"}
            albumCover={"/assets/eminem.webp"}
          />

          <TrendingArtistCard
            artistName={"I believe"}
            songTitle={"Dreams come true"}
            albumCover={"/assets/westa.jpg"}
          />
        </div>

        <div className="no-scrollbar w-full flex gap-3 items-start overflow-x-scroll">
          <TrendingArtistCard
            artistName={"Manny Kulantuz"}
            songTitle={"Everything is alright"}
            albumCover={"/assets/www.webp"}
          />

          <TrendingArtistCard
            artistName={"Fav Cameloko"}
            songTitle={"Universe in me"}
            albumCover={"/assets/eminem.webp"}
          />
          <TrendingArtistCard
            artistName={"Hally Valery"}
            songTitle={"Beautiful World in Mind"}
            albumCover={"/assets/ai.webp"}
          />

          <TrendingArtistCard
            artistName={"Hally Valery"}
            songTitle={"Beautiful World in Mind"}
            albumCover={"/assets/emi.jpg"}
          />
          <TrendingArtistCard
            artistName={"I believe"}
            songTitle={"Dreams come true"}
            albumCover={"/assets/westa.jpg"}
          />
        </div>

        <div className="no-scrollbar w-full flex gap-3 items-start overflow-x-scroll">
          <TrendingArtistCard
            artistName={"Hally Valery"}
            songTitle={"Beautiful World in Mind"}
            albumCover={"/assets/emi.jpg"}
          />
          <TrendingArtistCard
            artistName={"I believe"}
            songTitle={"Dreams come true"}
            albumCover={"/assets/westa.jpg"}
          />
          <TrendingArtistCard
            artistName={"Hally Valery"}
            songTitle={"Beautiful World in Mind"}
            albumCover={"/assets/ai.webp"}
          />
          <TrendingArtistCard
            artistName={"Manny Kulantuz"}
            songTitle={"Everything is alright"}
            albumCover={"/assets/www.webp"}
          />

          <TrendingArtistCard
            artistName={"Fav Cameloko"}
            songTitle={"Universe in me"}
            albumCover={"/assets/eminem.webp"}
          />
        </div>
      </div>
    </>
  );
}

export const TrendingArtistCard = ({ artistName, songTitle, albumCover }) => {
  return (
    <>
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 0.75)}
        // animation pattern
        className="w-60 md:w-72   bg-neutral-50 cursor-pointer  border rounded-xl mb-3 p-2  flex items-center justify-between transform transition hover:-translate-x-1 duration-150 ease-linear"
      >
        <div className="flex items-start md:items-center justify-start">
          <img
            src={albumCover}
            alt="banner"
            className="w-8 md:w-12 h-8 md:h-12  object-cover rounded-xl shadow-md"
          />

          <div className="flex items-center  justify-between">
            <div className="flex flex-col items-start  pl-4">
              <h3 className="text-[10px] font-semibold text-neutral-700">
                {songTitle}
              </h3>
              <p className="text-[8px] md:text-[9px] text-neutral-500">
                {artistName}
              </p>
            </div>
          </div>
        </div>

        <div className="w-16 px-2 flex flex-col items-end md:flex-row md:items-center gap-4">
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
      </motion.div>
    </>
  );
};
