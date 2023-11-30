import React from "react";
import Navproyect from "./Navproyect";
import Jobs from "./Jobs";
import Footer from "./Footer";
import About from "./About";
import { IoLogoWhatsapp } from "react-icons/io";
import { tecnologias, potenciados, personales } from "../constants";

function Content() {
  return (
    <div className="lg:py-2 lg:pr-2 ">
      <div className="w-full bg-[#121212] sm:rounded-md p-5">
        <div>
          <h1 className="font-bold text-3xl text-white">Hola Mundo!</h1>
          <p className="text-white text-xl">
            Desarrollador web, potenciando el crecimiento de tu empresa
            ofreciendo comunicacion continua para obtener los mejores
            resultados.
          </p>
          <p className="text-[#a7a7a7] font-bold ">-Alexis Aguilar</p>
        </div>
        <About />

        <div className="mt-5">
          <h1 className="font-bold text-2xl text-white">
            Experiencia en tecnologias como:
          </h1>
          <div className="mt-5">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
              {tecnologias.map((tecnologia) => (
                <div
                  key={tecnologia.id}
                  className="bg-neutral-800 rounded-md flex items-center overflow-hidden"
                >
                  <Navproyect
                    title={tecnologia.title}
                    desc={tecnologia.desc}
                    img={tecnologia.img}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <h1 className="font-bold text-white text-2xl mt-5">
          Potenciados por Alexis Aguilar:
        </h1>
        <div className="grid grid-cols-2 sm:grid-auto-fit gap-6 my-2">
          {potenciados.map((potenciado) => (
            <div key={potenciado.id}>
              <Jobs
                refe={potenciado.link}
                img={potenciado.img}
                nombre={potenciado.title}
                desc={potenciado.giro}
              />
            </div>
          ))}
        </div>
        {/* <p className="text-white text-xl my-4">
          Las empresas que han puesto su confianza en mí, aumentaron sus ventas
          y popularidad un promedio del 20% en los primeros 40 días.
        </p> */}

        <a
          href="https://api.whatsapp.com/send?phone=5514942604"
          className="font-bold text-white bg-[#17d760] flex justify-center items-center gap-1 rounded-lg my-3 max-w-md mx-auto md:hidden"
        >
          <IoLogoWhatsapp />
          Contactame!
        </a>

        <h1 className="font-bold text-white text-2xl mt-5">
          Mis proyectos personales:
        </h1>
        <div className="grid grid-cols-2 sm:grid-auto-fit gap-6 my-2">
          {personales.map((personal) => (
            <div key={personal.id}>
              <Jobs
                refe={personal.link}
                img={personal.img}
                nombre={personal.title}
                desc={personal.giro}
              />
            </div>
          ))}
        </div>

        <p className="text-white text-xl my-4">
          Proyectos que realizo para automatizar, facilitar y optimizar tareas,
          o retarme a mí mismo, desarrollados en mi tiempo libre como
          pasatiempo.
        </p>

        <div className="md:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Content;
