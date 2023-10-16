import React from "react";
import Navtech from "./Navtech";
import { VscLibrary } from "react-icons/vsc";
import { RiTeamLine } from "react-icons/ri";
import Footer from './Footer'

function Navbar() {

  const softskills = [
    {
      id: 1,
      name: "Responsabilidad",
    },
    {
      id: 2,
      name: "Cooperacion",
    },
    {
      id: 3,
      name: "Adaptabilidad",
    },
    {
      id: 4,
      name: "Comunicacion",
    }
  ];

  return (
    <div className="p-2 h-screen flex flex-col">
        
      <div className="font-bold p-3 flex flex-col justify-center text-[#a7a7a7] h-28 bg-[#121212] rounded-md min-w-min">
        <p>Bienvenido a mi portafolio!</p>
        <p>Contactame para potenciar tu empresa.</p>
      </div>

      <div className="mt-2 bg-[#121212] rounded-md p-3 h-full flex flex-col">
          
        <h2 className="text-[#a7a7a7] font-bold text-xl my-2">
          <VscLibrary />
          Sobre mi:
        </h2>

        <div className='flex flex-col sm:justify-center bg-[#181818] p-4 rounded-md'>
          <img src="https://th.bing.com/th/id/R.2af3d15a3bb050df27a1a9eedb2eb765?rik=TNeLI2sCt%2b%2bU8A&pid=ImgRaw&r=0" alt="profile pic" className='h-32 sm:h-40 rounded-md object-cover' />
          <div className='mt-2'>
            <h2 className='text-white font-bold my-2'>Alexis Aguilar</h2>
            <h2 className='mb-2 text-[#a7a7a7]'>Estudiante de ingenieria en sistemas - ESCOM</h2>
          </div>
        </div>

        <h2 className="text-[#a7a7a7] font-bold text-xl my-2">
          <RiTeamLine/>
          Softskills:
        </h2>

        <div className="text-white gap-3 py-1 grid grid-cols-2 items-center">
          {softskills.map((softskill) => (
            <div key={softskill.id}>
              <Navtech name={softskill.name} />
            </div>
          ))}
        </div>

        <Footer/>

      </div>
    </div>
  );
}

export default Navbar;
