import React from "react";
import classes from "./Project.module.css";

const Project = ({ title, description, image, githubLink, netlifyLink }) => {
  return (
    <div className={classes.project}>
      <img src={image} height="500px" />
      <div className={classes.overlay}>
        <h5 className={classes.title}>{title}</h5>
        <p className={classes.desc}>{description}</p>
        <div className={classes.links}>
          <a className={classes.link} href={githubLink} target="_blank">
            See the source code.
          </a>
          <a className={classes.link} href={netlifyLink} target="_blank">
            Move to the website.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
