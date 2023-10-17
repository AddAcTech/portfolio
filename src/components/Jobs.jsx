import React from "react";

function Jobs({ img, nombre, desc, refe }) {
  return (
    <a
      className="flex flex-col sm:justify-center bg-[#181818] hover:[#262626] hover:transition-all ease-in-out duration-500 p-4 rounded-md"
      href={refe}
      target="blank"
    >
      <img
        src={img}
        alt="Imagen del proyecto"
        className="h-32 sm:h-40 rounded-md object-cover"
      />
      <div className="mt-2">
        <h2 className="text-white font-bold my-2">{nombre}</h2>
        <h2 className="mb-2 text-[#a7a7a7]">{desc}</h2>
      </div>
    </a>
  );
}

export default Jobs;
