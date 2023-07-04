import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { MdOutlineDashboard, MdOutlineShield } from "react-icons/md";
import { BsShieldShaded } from "react-icons/bs";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";
import vegapayLogo from "../../../assets/vegapayLogo.svg";

interface SidebarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const sidebarClassName = isSidebarOpen
    ? `${classes.Sidebar}`
    : `${classes.Sidebar} ${classes.collapsed}`;

  const sidebarNavItem = [
    {
      text: "Team Management",
      logo: (
        <MdOutlineDashboard
          color="white"
          size={30}
          className={isSidebarOpen ? classes.icon : ""}
        />
      ),
      link: "/team",
    },
    {
      text: "Application Management",
      logo: (
        <MdOutlineDashboard
          color="white"
          size={30}
          className={isSidebarOpen ? classes.icon : ""}
        />
      ),
      link: "/team",
    },
    {
      text: "Corporate Management",
      logo: (
        <MdOutlineDashboard
          color="white"
          size={30}
          className={isSidebarOpen ? classes.icon : ""}
        />
      ),
      link: "/team",
    },
    {
      text: "User Management",
      logo: (
        <MdOutlineDashboard
          color="white"
          size={30}
          className={isSidebarOpen ? classes.icon : ""}
        />
      ),
      link: "/team",
    },
    {
      text: "Card Sale",
      logo: (
        <BsShieldShaded
          color="white"
          size={25}
          className={isSidebarOpen ? classes.icon : ""}
        />
      ),
      link: "/cardsale",
    },
    {
      text: "Card Transaction",
      logo: (
        <BsShieldShaded
          color="white"
          size={25}
          className={isSidebarOpen ? classes.icon : ""}
        />
      ),
      link: "/cardsale",
    },
    {
      text: "Inventory Management",
      logo: (
        <BsShieldShaded
          color="white"
          size={25}
          className={isSidebarOpen ? classes.icon : ""}
        />
      ),
      link: "/cardsale",
    },
    {
      text: "Release Transaction",
      logo: (
        <BsShieldShaded
          color="white"
          size={25}
          className={isSidebarOpen ? classes.icon : ""}
        />
      ),
      link: "/cardsale",
    },
    {
      text: "Services",
      logo: (
        <BsShieldShaded
          color="white"
          size={25}
          className={isSidebarOpen ? classes.icon : ""}
        />
      ),
      link: "/cardsale",
    },
  ];
  return (
    <>
      <div className={sidebarClassName}>
        <div
          className={classes.logoContainer}
          style={{ justifyContent: isSidebarOpen ? "space-between" : "center" }}
        >
          {isSidebarOpen && (
            <div className={classes.logo}>
              <img src={vegapayLogo} alt="vegapayLogo" />
            </div>
          )}
          {isSidebarOpen ? (
            <BiSolidChevronRightCircle
              onClick={toggleSidebar}
              fill="white"
              size={30}
            />
          ) : (
            <BiSolidChevronLeftCircle
              onClick={toggleSidebar}
              fill="white"
              size={30}
            />
          )}
        </div>
        <ul className={classes.NavItems}>
          {sidebarNavItem?.map((item) => (
            <li
              className={classes.NavItem}
              style={{ justifyContent: !isSidebarOpen ? "center" : "" }}
            >
              <Link to={item.link}>
                {item.logo}

                {isSidebarOpen && <div>{item.text}</div>}
              </Link>
            </li>
          ))}
        </ul>

        {isSidebarOpen && (
          <footer className={classes.sidebarFooter}>
            <div>VegaPay Version 1.005</div>
            <p className={classes.Copyright}>
              Copyright VegaPay Techno Pvt limited
            </p>
          </footer>
        )}
      </div>
    </>
  );
};

export default Sidebar;
