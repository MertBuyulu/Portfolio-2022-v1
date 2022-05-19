import React from "react";

// components
import Header from "./components/header/header.component";
import About from "./components/about/about.component";
import NavBar from "./components/nav/nav.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
