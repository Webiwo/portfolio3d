import { BrowserRouter } from "react-router-dom";

import {
  AboutOverview,
  AboutServices,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
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
