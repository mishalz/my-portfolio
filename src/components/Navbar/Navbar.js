import React from "react";
import classes from "./Navbar.module.css";

import {
  faUser,
  faLaptopCode,
  faGraduationCap,
  faFileText,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";

const Navigationbar = () => {
  return (
    <div className={classes.NavMenu}>
      <NavbarItem page="home" icon={faUser} />
      <NavbarItem page="projects" icon={faLaptopCode} />
      <NavbarItem page="education" icon={faGraduationCap} />
      <NavbarItem page="resume" icon={faFileText} />
      <NavbarItem page="contact" icon={faAddressBook} />
    </div>
  );
};

export default Navigationbar;
