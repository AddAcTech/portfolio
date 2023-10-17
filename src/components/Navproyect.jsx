import React from "react";

function Navproyect({ title, img }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-1 sm:gap-3 items-center py-1 sm:h-20">
      <div className="ml-2 w-14 object-cover">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col">
        <p className="text-white font-bold">{title}</p>
      </div>
    </div>
  );
}

export default Navproyect;
