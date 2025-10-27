import "./i18n/i18n";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import {
  AboutOverview,
  AboutServices,
  ImageShowcase,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="background">
          <Navbar />
          <Hero />
        </div>

        <AboutOverview />
        <AboutServices />
        <div className="my-16 w-full px-4">
          <ImageShowcase
            backgroundImage="./images/background.png"
            authorImage="./images/author.png"
          />
      </div>
        <Experience />
        {/*
        <Tech />
        <Works />
        <Feedbacks />
      */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
