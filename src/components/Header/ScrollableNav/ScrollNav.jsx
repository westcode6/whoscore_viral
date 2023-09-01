import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { styles } from "../../../styles";

export default function ScrollNav() {
  const location = useLocation();

  return (
    <section className="w-full glass-effect">
      <div
        className={`${styles.paddingX} flex items-center justify-between overflow-x-scroll no-scrollbar shadow-xl py-4`}
      >
        <NavItem
          title="Soccer"
          to="/"
          icon="⚽"
          active={location.pathname === "/"}
        />

        <NavItem
          title="BasketBall"
          to="/comingSoon"
          icon="🏀"
          active={location.pathname === "/comingSoon"}
        />

        <NavItem
          title="Cricket"
          to="/comingSoon"
          icon="🏏"
          active={location.pathname === "/comingSoon"}
        />

        <NavItem
          title="Tennis"
          to="/comingSoon"
          icon="⚾"
          active={location.pathname === "/comingSoon"}
        />

        <NavItem
          title="Hockey"
          to="/comingSoon"
          icon="🏑"
          active={location.pathname === "/comingSoon"}
        />

        <NavItem
          title="Rugby"
          to="/comingSoon"
          icon="🏈"
          active={location.pathname === "/comingSoon"}
        />
      </div>
    </section>
  );
}

function NavItem({ title, to = "#", icon, active }) {
  return (
    <NavLink to={to} className={`flex-1  ${active && ""}`}>
      <div to={to} className={`flex  justify-center items-center gap-4`}>
        <div
          className={`${
            active ? "border border-green-400" : "border-none"
          } flex items-center gap-1 px-4 py-1 rounded-2xl`}
        >
          <span className={`${active ? "text-md" : "text-sm"}`}>{icon}</span>
          <h4
            className={` ${
              active
                ? "text-neutral-50 text-[13px] font-medium"
                : "text-[12px] text-neutral-500"
            } block  font-medium tracking-wide`}
          >
            {title}
          </h4>
        </div>
      </div>
    </NavLink>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
};
