import React from "react";
import { Link } from "react-router-dom";
import {FaChevronDown } from  "react-icons/fa"
import { styles } from "../../styles";
// ====== Card Wrapper Component ====
function CardWrapper({ cardTitle, children }) {
  return (
    <>
      <section className="w-full px-4 py-3 mb-3  shadow-lg rounded-3xl">
        <div className="flex items-start justify-between">
          <h2 className={`${styles.headText}`}>{cardTitle}</h2>

          <Link to={"/"}>
            <p className="text-[10px] flex capitalize font-semibold  text-black tracking-tight">
              See All
              <span className="text-xs  ml-2 text-black font-black">
                <FaChevronDown />
              </span>
            </p>
          </Link>
        </div>

        <div className="no-scrollbar w-full flex  shadow-sm items-start overflow-x-scroll">
          {children}
        </div>
      </section>
    </>
  );
}

export default CardWrapper;
