
import { HiOutlineCollection} from "react-icons/hi";
import {RiHome5Fill} from "react-icons/ri";
import {FaStore} from "react-icons/fa"
import {PiGameControllerFill, PiDiscFill} from "react-icons/pi"
import {BsFillChatQuoteFill} from "react-icons/bs"
import React from "react";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  return (
  <>
  <div className="w-full  glass-effect rounded-b-3xl shadow-xl  sticky bottom-0 z-50 ">
  <footer className="glass-effect rounded-t-3xl px-6 py-3  w-full sm:hidden " >
   
   <div className="flex  items-center justify-between">
     <NavItem
       title="Home"
       to="/"
       icon={<RiHome5Fill className="text-lg" />}
       active={location.pathname === "/"}
     />

<NavItem
       title="Explore"
       to="/discover"
       icon={<PiDiscFill className="text-lg" />}
       active={location.pathname === "/explore"}
     />
      
      <NavItem
       title="Gaming"
       to="/gaming"
       icon={<PiGameControllerFill className="text-lg" />}
       active={location.pathname === "/gaming"}
     />


     <NavItem
       title="Marketplace"
       to="/marketplace"
       icon={<FaStore className="text-lg" />}
       active={location.pathname === "/marketplace"}
     />

<NavItem
       title="Chat"
       to="/chat"
       icon={<BsFillChatQuoteFill className="text-lg" />}
       active={location.pathname === "/chat"}
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
        active ? "font-bold text-sm" : "text-white text-xs"
      } w-9 h-10 flex flex-col gap-1 items-center justify-center`}
    >
      <span className={`${active ? "text-green-400 text-xl" : "text-neutral-600"}`}>
        {icon}
      </span>
      <span
        className={` ${
          active ? "text-green-400 font-semibold" : "text-xs text-neutral-600"
        } block text-[10px] font-medium mt-1`}
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
