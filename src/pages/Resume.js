import React from "react";
import classes from "./css/Page.module.css";
import styles from "./css/Resume.module.css";

const Resume = () => {
  const downloadPdfHandler = () => {
    fetch("UpdatedCV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "UpdatedCV.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className={classes.page} id={styles.resume}>
      <h1>My Resume</h1>

      <div className={styles["resume-opts"]}>
        <a
          className={styles.viewButton}
          target="_blank"
          href="https://drive.google.com/file/d/1QEAOmixz1lxVubBFQOpASPENP6GmRu82/view?usp=sharing"
        >
          View my Resume
        </a>
        <button onClick={downloadPdfHandler}>Download my Resume</button>
      </div>
    </div>
  );
};

export default Resume;
