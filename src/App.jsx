import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionWrapper from "./hoc/SectionWrapper";
import HomePage from "./Home/HomePage";
import {Navbar  }from "./components/Navbar";
// import { Discover } from "./pages/discover";
// import { Albulms } from "./pages/albums";
// import { myLibrary } from "./pages/myLibrary";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div>
        <div className="mt-0 bg-neutral-900 h-screen relative">
          <Router className="">

            <div className="App">
              <div className="content">
            <Navbar />

                <Routes>
                  <Route path="/" element={<HomePage />} />
                  {/* <Route path="/discover" element={<Discover />} />
                  <Route path="/album" element={<Albulms />} /> */}

                  <Route path="/myLibrary" element={<myLibrary />} />
                </Routes>
                <Footer />

              </div>
            </div>


          </Router>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(App, "");
