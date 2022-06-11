// Func
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// Styles
import s from "./App.module.css";
// Compomemts
// general components
import NavBar from "./components/generalComponents/NavBar/NavBar";
// page components
import { Home } from "./components/pageComponents/Home/Home";
import About from "./components/pageComponents/About/About";
import Skills from "./components/pageComponents/Skills/Skills";
import Contact from "./components/pageComponents/Contact/Contact";
import ErrorPage from "./components/pageComponents/ErrorPage/ErrorPage";

function App() {
  // NavBar state
  const [showNavBar, setShowNavBar] = useState(false);

  // NavBar/About props
  const navBarState = {
    showNavBar,
    setShowNavBar,
  };

  return (
    <div className={s.appContainer}>
      <NavBar navBarState={navBarState} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
