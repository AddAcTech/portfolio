import React from 'react'
import Navproyect from './Navproyect'
import Jobs from './Jobs'
import Footer from './Footer'
import img1 from '../assets/spa.png'
import { IoLogoWhatsapp } from "react-icons/io";

function Content() {
  const tecnologias = [
    {
      id: 1,      
      title: "JavaScript",
      desc: "Descripcion 1",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
      id: 2,      
      title: "ReactJS",
      desc: "Descripcion 1",
      img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    },
    {
      id: 3,      
      title: "TailwindCSS",
      desc: "Descripcion 1",
      img: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4"
    },
    {
      id: 4,      
      title: "HTML",
      desc: "Descripcion 1",
      img: "https://icon-library.com/images/html5-icon/html5-icon-13.jpg"
    },
    {
      id: 5,      
      title: "TensorflowJS",
      desc: "Descripcion 1",
      img: "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png"
    }  
  ]

  const potenciados = [
    {
      id: 1,
      title: 'CasaLyona',
      giro:'Spa',
      link: 'https://casalyona.addac.tech/',
      img: img1
    },
    {
      id: 2,
      title: 'La Taqueria',
      giro:'Restaurante',
      link: 'https://casalyona.addac.tech/',
      img: 'https://foodandtravel.mx/wp-content/uploads/2021/03/taqueri%CC%81as-en-CDMX.jpg'
    },
    {
      id: 3,
      title: 'Las Delicias',
      giro:'Restaurante',
      link: 'https://casalyona.addac.tech/',
      img: 'https://cdn2.chicmagazine.com.mx/uploads/media/2021/06/18/cortes-carne-encantaran-papa-foto.jpg'
    },
    {
      id: 4,
      title: 'Las Delicias',
      giro:'Restaurante',
      link: 'https://casalyona.addac.tech/',
      img: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/03/f1-formula-1-checo-perez-GettyImages-1247675782-e1677885322904.jpg?quality=100&strip=info'
    },
    {
      id: 5,
      title: 'Las Delicias',
      giro:'Restaurante',
      link: 'https://casalyona.addac.tech/',
      img: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/03/f1-formula-1-checo-perez-GettyImages-1247675782-e1677885322904.jpg?quality=100&strip=info'
    }
  ]

  const personales = [
    {
      id: 1,
      title: 'Color Picker',
      giro:'Extension de navegador',
      link: 'https://github.com/AddAcTech/colorpicker',
      img: 'https://th.bing.com/th/id/OIP.cOVZPS-yKeMy4Ov0koU5lwHaGz?pid=ImgDet&rs=1'
    }
  ]


  return (
    <div className='sm:py-2 sm:pr-2'>
      <div className='w-full bg-[#121212] sm:rounded-md p-5'>
        <div>
          <h1 className='font-bold text-3xl text-white'>Hola Mundo!</h1>
          <p className='text-white text-xl'>Programador front-end, potenciando el crecimiento de tu empresa ofreciendo comunicacion continua para obtener los mejores resultados.</p>
          <p className='text-[#a7a7a7] font-bold '>-Alexis Aguilar</p>
        </div>
        
        <div className='mt-5'>
          <h1 className='font-bold text-2xl text-white'>Experiencia en tecnologias como:</h1>
          <div className='mt-5'>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
              {
                tecnologias.map(tecnologia => (
                <div key={tecnologia.id} className='bg-neutral-800 rounded-md flex items-center overflow-hidden'>
                  <Navproyect title={tecnologia.title} desc={tecnologia.desc} img={tecnologia.img}/>
                </div>
                ))
              }
            </div>
          </div>
        </div>
        <h1 className='font-bold text-white text-2xl mt-5'>Potenciados por Alexis Aguilar:</h1>
        <div className='grid grid-cols-2 sm:grid-auto-fit gap-6'>
        {
          potenciados.map(potenciado =>(
            <div className='my-5' key={potenciado.id}>
              <Jobs refe={potenciado.link} img={potenciado.img} nombre={potenciado.title} desc={potenciado.giro} />
            </div>
          ))
        }
        </div>
        <p className='text-white text-xl my-4'>Las empresas que han puesto su confianza en mi, aumentaron sus ventas y popularidad un promedio del 20% en los primeros 40 dias.</p>
        
        <a href="https://api.whatsapp.com/send?phone=5514942604" className="font-bold text-white bg-[#17d760] flex justify-center items-center gap-1 rounded-lg my-2 max-w-md mx-auto md:hidden"><IoLogoWhatsapp/>Contactame!</a>
        
        <h1 className='font-bold text-white text-2xl mt-5'>Mis proyectos personales:</h1>
        <div className='grid grid-cols-2 sm:grid-auto-fit gap-6'>
        { 
          personales.map(personal =>(
            <div className='my-5 max-w-md' key={personal.id}>
              <Jobs refe={personal.link} img={personal.img} nombre={personal.title} desc={personal.giro}/>
            </div>
          ))
        }
        </div>
        
        <p className='text-white text-xl my-4'>Proyectos que realizo para automatizar, facilitar y optimizar tareas, desarrollados en mi tiempo libre como pasatiempo.</p>
        
        <div className='md:hidden'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Content
