import React from 'react';
import Navtech from './Navtech';
import {VscLibrary} from 'react-icons/vsc';
import Aptitudes from './Aptitudes';

function Navbar() {

  const tecnologias = [
    {
      id:1,
      name: "ReactJS"
    },
    {
      id:2,
      name: "JavaScript"
    },
    {
      id:3,
      name: "TailwindCSS"
    },
    {
      id:4,
      name: "HTML"
    }
  ]

  const aptitudes = [
    {
      id:1,
      img:"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=1200&aspect_ratio=16:9",
      h1:"Aptitudes",
      v1:"Trabajo en equipo",
      v2:"Comunicacion",
      v3:"Asertividad"
    },
    {
      id:2,
      img:"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=1200&aspect_ratio=16:9",
      h1:"Metodologias",
      v1:"Kanban",
      v2:"Scrum"
    },
    {
      id:3,
      img:"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=1200&aspect_ratio=16:9",
      h1:"Educacion",
      v1:"Centro de estudios Cientificos y tecnologicos 9, Tecnico en Programacion",
      v2:"Ingenieria en sistemas ESCOM ",
    },
    {
      id:4,
      img:"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=1200&aspect_ratio=16:9",
      h1:"Hello",
      v1:"Hello",
      v2:"Hello",
      v3:"Hello"
    }
  ]
  return (
    <div className='p-2 h-screen flex flex-col'>
      <div className='text-[#a7a7a7] h-28 bg-[#121212] rounded-md p-3 flex flex-col justify-center'>
        <ul className='font-bold'>
          <li className='my-2'><p>Bienvenido</p></li>
          <li className='my-2'><p>Contactame</p></li>
        </ul>
      </div>

      <div className='mt-2 bg-[#121212] rounded-md p-3 h-full'>
        <section className='text-[#a7a7a7] font-bold text-xl'>
          <h1><VscLibrary/>Experiencia en:</h1>
        </section>

        <div className='text-white justify-center mt-4 gap-3 py-1 lg:flex-row flex-col flex sm:overflow-hidden'>
          {
          tecnologias.map(tecnologia =>(
            <div key={tecnologia.id} className='w-full'>
              <Navtech name={tecnologia.name}/>
            </div>
          ))
          }
        </div>

        <div className='my-auto'>
          {
            aptitudes.map(aptitude =>(
              <Aptitudes key={aptitude.id} img={aptitude.img} h1={aptitude.h1} v1={aptitude.v1} v2={aptitude.v2} v3={aptitude.v3}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
