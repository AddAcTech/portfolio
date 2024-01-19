import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full h-screen">
        <Content />
      </div>
    </div>
  );
}

export default App;
