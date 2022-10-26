import React from "react";
import classes from "./css/Page.module.css";
import styles from "./css/Education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Educationpage = () => {
  return (
    <div className={classes.page} id={styles.education}>
      <div className={styles["text-container"]}>
        <h1>
          My Education <FontAwesomeIcon icon={faGraduationCap} />{" "}
        </h1>
        <div className={styles.info}>
          <h3>National University of Sciences and Technology, Islamabad.</h3>
          <h4>2019 – current</h4>
          <p>Bachelor of Engineering in Software Engineering</p>
        </div>
        <hr />
        <div className={styles.info}>
          <h3>Aga Khan Higher Secondary School, Karachi.</h3>
          <h4>2017 – 2019</h4>
          <p>
            Secured A+ Grade and became a part of the Top 20 list (all over
            Pakistan) in Aga Khan Board.
          </p>
        </div>
        <hr />
        <div className={styles.info}>
          <h3>AES School for Girls, Karachi.</h3>
          <h4>2015 – 2017</h4>
          <p>
            Matriculation in Computers Secured A+ Grade and became a part of the
            Top 20 list (all over Pakistan) in Aga Khan Board.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Educationpage;
