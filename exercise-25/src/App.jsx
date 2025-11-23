import React from "react";
import NavBars from "./Conponent/NavBars";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBars />
      <mai className="max-w-4xl mx-auto p-6">
        <Outlet />
      </mai>
    </div>
  );
};

export default App;
