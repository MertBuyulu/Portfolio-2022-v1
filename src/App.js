import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
