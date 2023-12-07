import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Footer from "./Layout/Footer";

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/Gallery" element={<Gallery />}> </Route>
        <Route path="/Services" element={<Services />}> </Route>
        <Route path="/Contact" element={<Contact />}> </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
