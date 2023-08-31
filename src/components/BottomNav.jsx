
import { HiOutlineCollection} from "react-icons/hi";
import {RiDashboardLine} from "react-icons/ri";
import {SiAirplayaudio} from "react-icons/si"
import {TbPlaylist} from "react-icons/tb"
import React from "react";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";

export default function BottomBar() {
  const location = useLocation();

  return (
  <>
  <div className="w-full sticky mt-0 bottom-0 z-50 ">
  <footer className="glass-effect  w-full sm:hidden " >
   
   <div className="flex  items-center justify-between">
     <NavItem
       title="Home"
       to="/"
       icon={<RiDashboardLine className="text-lg" />}
       active={location.pathname === "/"}
     />

<NavItem
       title="Discover"
       to="/discover"
       icon={<SiAirplayaudio className="text-lg" />}
       active={location.pathname === "/newsPage"}
     />
      

     <NavItem
       title="Album"
       to="/album"
       icon={<HiOutlineCollection className="text-lg" />}
       active={location.pathname === "/watchPage"}
     />

<NavItem
       title="Library"
       to="/myLibrary"
       icon={<TbPlaylist className="text-lg" />}
       active={location.pathname === "/myLibrary"}
     />
   
   </div>
 </footer>
  </div>
  </>
  );
}

function NavItem({ title, to = "#", icon, active }) {
  return (
    <Link
      to={to}
      className={`${
        active ? "text-neutral-900 font-bold text-sm" : "text-white text-xs"
      } px-6 py-2 flex flex-col items-center justify-center text-xs tracking-wider`}
    >
      <span className={`${active ? "bg-gradient shadow-lg text-white p-1 rounded-lg block" : "text-neutral-900"}`}>
        {icon}
      </span>
      <span
        className={` ${
          active ? "font-black text-black" : "text-xs text-neutral-500"
        } block text-[10px] font-bold mt-2`}
      >
        {" "}
        {title}
      </span>
    </Link>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.element,
  active: PropTypes.bool,
};
