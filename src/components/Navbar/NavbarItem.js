import React from "react";
import classes from "./Navbar.module.css";
import { PageContext } from "../../context/PageContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarItem = ({ page, icon }) => {
  const currentPage = useContext(PageContext);
  return (
    <button
      className={currentPage.currentPage === page ? classes.active : ""}
      onClick={() => {
        currentPage.setCurrentPage(page);
      }}
    >
      <FontAwesomeIcon className={classes.icon} icon={icon} />
    </button>
  );
};

export default NavbarItem;
