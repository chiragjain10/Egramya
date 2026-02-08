import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ScrollToTop from "./Components/Scroll";
import Header from "./Components/Static/Header";
import Footer from "./Components/Static/Footer";
import Preloader from "./Components/Preloader";

import Home from "./Components/Homepage/Home";
import AboutProgram from "./Components/Pages/About";
import ModuleOnePage from "./Components/Pages/Module1";
import ModuleTwoPage from "./Components/Pages/Module2";
import ModuleThreePage from "./Components/Pages/Module3";
import ImpactPage from "./Components/Pages/Impact";
import ProgramStructurePage from "./Components/Pages/Structure";
import EnrollPage from "./Components/Pages/Enroll";

function App() {
  return (
    <Router>
      {/* Preloader (loads once on initial app load) */}
      <Preloader />

      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutProgram />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/structure" element={<ProgramStructurePage />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="/module-1" element={<ModuleOnePage />} />
        <Route path="/module-2" element={<ModuleTwoPage />} />
        <Route path="/module-3" element={<ModuleThreePage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
