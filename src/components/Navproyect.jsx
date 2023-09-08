import React from "react";

function Navproyect({title, desc, link, img}) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-1 sm:gap-3 items-center py-2 sm:py-0 h-16 sm:h-20">
      <div className="ml-2 sm:ml-3 w-10 sm:w-14 sm:h-14"><img src={img} alt="" /></div>
      <div className="flex flex-col">
        <p className="text-white font-bold">{title}</p>
        <p className="text-[#a7a7a7] hidden sm:visible">{desc}</p>
      </div>
    </div>
  );
}

export default Navproyect;
