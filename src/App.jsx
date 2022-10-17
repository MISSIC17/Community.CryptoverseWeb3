import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage";
// import ProjectsPage from "./Pages/ProjectsPage";
import { Navbar, Sidebar, RoadmapResources,ViewProject } from "./components";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route index exact path={"/"} element={<Homepage />} />
        <Route exact path={":title"} element={<ViewProject />} />
        <Route path={"roadmapResources"} element={<RoadmapResources />} />
      </Routes>
    </>
  );
};

export default App;
