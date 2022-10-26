import React from "react";
import classes from "./css/Page.module.css";
import styles from "./css/Home.module.css";
import Typewriter from "typewriter-effect";
import { PageContext } from "../context/PageContext";
import { useContext } from "react";

const Homepage = () => {
  const { currentPage } = useContext(PageContext);
  let classnames = classes.page;
  if (currentPage !== "home") {
    classnames = `${classes.page} ${styles.blur}`;
  }
  return (
    <div className={classnames} id={styles.homepage}>
      <Typewriter
        options={{ autoStart: true, loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("<> Hello </>")
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              '<> I am <span style="color:#f7b733;">Mishal Zulfiqar</span>.'
            )
            .typeString("</>")
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              '<> A passionate <span style="color:#fc4a1a;">developer</span>.'
            )
            .typeString("</>")
            .start()
            .pauseFor(1000);
        }}
      />
    </div>
  );
};

export default Homepage;
