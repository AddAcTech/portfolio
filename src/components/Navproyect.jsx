import React from "react";

function Navproyect({ title, img }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-1 sm:gap-3 items-center sm:h-20 bg-neutral-800 rounded-md">
      <div className="p-1">
        <img src={img} alt={title} className="object-contain w-14 h-14" />
      </div>
      <div className="flex flex-col">
        <p className="text-white font-bold">{title}</p>
      </div>
    </div>
  );
}

export default Navproyect;
