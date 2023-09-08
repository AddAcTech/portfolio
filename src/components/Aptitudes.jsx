import React from "react";

function Aptitudes({ img, h1, v1, v2, v3 }) {
  return (
    <div className="mt-6 text-white grid grid-cols-2">
      <div>
        <img src={img} alt="" className="w-full h-full overflow-hidden object-cover"/>
      </div>
      <div className="pl-2">
        <h2 className="font-bold">{h1}</h2>
        <ul className="">
          <li>{v1}</li>
          {/*Educacion, idiomas, etc*/}
          <li>{v2}</li>
          <li>{v3}</li>
        </ul>
      </div>
    </div>
  );
}

export default Aptitudes;
