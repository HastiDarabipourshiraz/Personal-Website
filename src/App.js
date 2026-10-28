import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Footer from "./components/Footer";
import ProjectDetail from "./components/Projects/ProjectDetail";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router >
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/publication" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project1" element={<ProjectDetail projectId={1} />} />
          <Route path="/project2" element={<ProjectDetail projectId={2} />} />
          <Route path="/project3" element={<ProjectDetail projectId={3} />} />
          <Route path="/project4" element={<ProjectDetail projectId={4} />} />
          <Route path="/project5" element={<ProjectDetail projectId={5} />} />
          <Route path="/project6" element={<ProjectDetail projectId={6} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
