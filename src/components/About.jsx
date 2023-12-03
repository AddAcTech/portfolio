import { VscLibrary } from "react-icons/vsc";
import { RiTeamLine } from "react-icons/ri";
import Navtech from "./Navtech";
import pfp from "../assets/me.jpg";
import { softskills } from "../constants.js";

export default function About() {
  return (
    <div className="p-3 gap-6 flex flex-col sm:flex-row justify-center lg:hidden">
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

      <div className="text-white flex flex-col justify-center items-center">
        <h2 className="text-[#a7a7a7] flex items-center gap-2 font-bold text-xl my-2">
          <RiTeamLine />
          Softskills:
        </h2>
        <div className="flex flex-col gap-2">
          {softskills.map((softskill) => (
            <div key={softskill.id}>
              <Navtech name={softskill.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
