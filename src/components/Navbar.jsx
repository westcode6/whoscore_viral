import React from "react";
import { FiSearch } from "react-icons/fi";
import { styles } from "../styles";
export const Navbar = () => {
  return (
    <>
      <div  className="w-full  glass-effect rounded-b-3xl shadow-xl  sticky top-0 z-50 ">
        <nav className={`${styles.paddingX} ${styles.paddingY} flex flex-col`}>
          <div className="pb-2">
            <a
              href="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                windows.scrollTo(0, 0);
              }}
            >


              <div className="flex items-start justify-start py-3">
                  <span>
                    <svg
                      width="30"
                      height="20"
                      viewBox="0 0 30 20"
                      className=""
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3821 0L22.253 1.16428L23.0194 2.11459L22.2643 9.16399L21.314 9.93037L12.63 9.00028L12.5877 9.39519L11.6521 10.1496L0.754515 8.98254L0 8.04691L0.203908 6.14325L3.29652 4.9119L0.601562 2.43147L0.757936 0.970865L1.69351 0.216361L10.3909 1.14785L10.4317 0.766385L11.3821 0ZM11.9176 1.63634L11.7848 2.87613L2.29924 1.86022L6.19642 5.44717L1.66417 7.25172L1.63777 7.49814L11.1034 8.51187L11.2362 7.27201L20.7785 8.29403L21.3831 2.6501L11.9176 1.63634Z"
                        fill="white"
                      />
                      <path
                        d="M21.1418 11.0517L20.6025 11.0133L19.9262 17.355L21.3505 17.5085L22.0271 11.163L22.1394 10.1521L21.1418 11.0517Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                <h1 className="text-white text-lg capitalize  font-medium tracking-wide cursor-pointer">
                  whoscore
                </h1>
              </div>
            </a>
          </div>

          <div className="flex justify-center items-center gap-2 py-1">
            <div className="w-[13%] h-[13%] border-2 border-green-400 rounded-full">
              <img
                src="./assets/westa.jpg"
                alt="westman"
                className="w-full  rounded-full object-cover"
              />
            </div>
            <span />
            <div className="w-full">
              <h1 className="text-md font-medium tracking-wide">
                Hello Festiver
              </h1>
              <p className="text-[12px] text-neutral-500">
                What a day to share the passion of sport 💸🥳
              </p>
            </div>
          </div>

          {/* ===SEARCH BAR===== */}
          <div className="hidden ml-6  md:ml-16 col-span-7 md:col-span-6 md:hidden items-center justify-center">
            <div className="flex-1 relative ">
              <FiSearch className="absolute text-xs text-neutral-900 top-3 right-5 z-10" />
              <input
                type="text"
                placeholder="Search any music"
                className="w-full shadow  text-xs placeholder:text-neutral-500 text-neutral-700 font-semibold glass-effect border-2  border-neutral-900 rounded-xl  py-3 pl-4"
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
