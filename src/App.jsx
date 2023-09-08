import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className="flex">
      <div className="md:w-[30%] hidden lg:block ">
        <div className="md:sticky md:top-0">
          <Navbar />
        </div>
      </div>
      <div className="w-full">
        <Content/>
      </div>
    </div>
  );
}

export default App;
