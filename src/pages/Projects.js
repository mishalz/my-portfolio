import React from "react";
import classes from "./css/Page.module.css";
import styles from "./css/Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Project from "../components/assets/Project";

const projects = [
  {
    title: "Shop It",
    description:
      "A personal project. A bright themed, user-interactive, e-commerce website using Reactjs, React Redux and firebase as dummy backend.",
    image: "shopit.png",
    githubLink: "https://github.com/mishalz/Shop-It",
    netlifyLink: "https://stunning-truffle-ce5114.netlify.app",
  },
  {
    title: "Money Tracker",
    description:
      "A code-along project. A user interactive money tracker application built using reactjs.",
    image: "moneytracker.png",
    githubLink: "https://github.com/mishalz/money-tracker-react",
    netlifyLink: "https://brilliant-mousse-5e921e.netlify.app/",
  },
  {
    title: "Food Ordering",
    description:
      "A code-along project. A reactjs application for food ordeing with an attractive user interface.",
    image: "foodordering.png",
    githubLink: "https://github.com/mishalz/react-food-order-app",
    netlifyLink: "https://glittering-beignet-b494b4.netlify.app",
  },
  {
    title: "Social Media",
    description:
      "A code-along project. A social interaction platform built using MERN with graphQL",
    image: "social.png",
    githubLink: "https://github.com/mishalz/merng-client",
    netlifyLink: "https://wondrous-pavlova-41af51.netlify.app/",
  },
  {
    title: "My Todo",
    description:
      "A personal project. A todo app built using typescript and with a basic yet elegant user interface.",
    image: "todos.png",
    githubLink: "https://github.com/mishalz/my-todo",
    netlifyLink: "https://monumental-sprite-88d0b7.netlify.app/",
  },
  {
    title: "User Info",
    description:
      "A code-along project. A basic react js project to display user information.",
    image: "userinfo.png",
    githubLink: "https://github.com/mishalz/my-first-react-app",
    netlifyLink: "https://vermillion-frangollo-7cb4a4.netlify.app/",
  },
];
const Projects = () => {
  return (
    <div className={classes.page} id={styles.projects}>
      <h1>
        My Projects <FontAwesomeIcon icon={faLaptopCode} />{" "}
      </h1>
      <div className={styles["projects-container"]}>
        <p className={styles.scroll}>{">"}</p>
        {projects.map((project) => (
          <Project {...project} key={Math.floor(Math.random() * 1000)} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
