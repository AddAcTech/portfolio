import { VscLibrary } from "react-icons/vsc";
import { RiTeamLine } from "react-icons/ri";
import Navtech from "./Navtech";
import pfp from "../assets/me.jpg";
import { softskills } from "../constants.js";
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

export default function About() {
  return (
    <div className="p-3 gap-6 flex flex-col sm:flex-row justify-center">
      <div className="flex flex-col sm:justify-center bg-[#181818] p-4 rounded-md">
        <h2 className="text-[#918888] flex items-center gap-2 font-bold text-xl mb-2">
          <VscLibrary />
          Sobre mi:
        </h2>
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

      <div className="text-white flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#a7a7a7] flex items-center gap-2 font-bold text-xl mt-2 mx-auto">
            <RiTeamLine />
            Softskills:
          </h2>
          {softskills.map((softskill) => (
            <div key={softskill.id}>
              <Navtech name={softskill.name} />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 text-[#17d760]">
          <a
            href="https://www.linkedin.com/in/alexis-daniel-aguilar-chavez-65a325274"
            target="blank"
            className="hover:scale-110 transition-all ease-in-out"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            href="https://github.com/AddAcTech"
            target="blank"
            className="hover:scale-110 transition-all ease-in-out"
          >
            <FaGithubSquare size={50} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5514942604"
            target="blank"
            className="hover:scale-110 transition-all ease-in-out"
          >
            <FaWhatsappSquare size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
