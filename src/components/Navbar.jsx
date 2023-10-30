import React from "react";
import Navtech from "./Navtech";
import { VscLibrary } from "react-icons/vsc";
import { RiTeamLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Footer from "./Footer";
import { softskills } from "../constants.js";
import pfp from "../assets/me.jpg";

function Navbar() {
  return (
    <div className="p-2 lg:sticky hidden lg:top-0 h-full lg:flex">
      <div className="bg-[#121212] rounded-md p-3 gap-2 flex flex-col">
        <h2 className="text-[#918888] flex items-center gap-2 font-bold text-xl mb-2">
          <VscLibrary />
          Sobre mi:
        </h2>

        <div className="flex flex-col sm:justify-center bg-[#181818] p-4 rounded-md">
          <img
            src={pfp}
            alt="profile pic"
            className="h-32 sm:h-40 rounded-md object-cover"
          />
          <div className="mt-2">
            <h2 className="text-white font-bold my-2">Alexis Aguilar</h2>
            <h2 className="mb-2 text-[#a7a7a7]">
              Estudiante de ingenieria en sistemas - ESCOM
            </h2>
          </div>
        </div>

        <h2 className="text-[#a7a7a7] flex items-center gap-2 font-bold text-xl my-2">
          <RiTeamLine />
          Softskills:
        </h2>

        <div className="text-white gap-3 py-1 grid grid-cols-2 items-center">
          {softskills.map((softskill) => (
            <div key={softskill.id}>
              <Navtech name={softskill.name} />
            </div>
          ))}
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5514942604"
          className="font-bold text-white bg-[#17d760] flex justify-center items-center gap-1 rounded-lg my-2"
        >
          <IoLogoWhatsapp />
          Contactame!
        </a>
        <Footer />
      </div>
    </div>
  );
}

export default Navbar;
