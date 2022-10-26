import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import Homepage from "./pages/Home";
import Education from "./pages/Education";
import { PageContext } from "./context/PageContext";
import { useContext } from "react";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const App = () => {
  const { currentPage } = useContext(PageContext);
  return (
    <div className={classes.container}>
      <Navbar />
      <Homepage />
      {currentPage === "education" && <Education />}
      {currentPage === "projects" && <Projects />}
      {currentPage === "resume" && <Resume />}
      {currentPage === "contact" && <Contact />}
    </div>
  );
};

export default App;
