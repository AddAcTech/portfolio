import React from 'react'
import Navproyect from './Navproyect'
import Jobs from './Jobs'
import Footer from './Footer'

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
      img: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/03/f1-formula-1-checo-perez-GettyImages-1247675782-e1677885322904.jpg?quality=100&strip=info'
    },
    {
      id: 2,
      title: 'La Taqueria',
      giro:'Restaurante',
      link: 'https://casalyona.addac.tech/',
      img: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/03/f1-formula-1-checo-perez-GettyImages-1247675782-e1677885322904.jpg?quality=100&strip=info'
    },
    {
      id: 3,
      title: 'Las Delicias',
      giro:'Restaurante',
      link: 'https://casalyona.addac.tech/',
      img: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/03/f1-formula-1-checo-perez-GettyImages-1247675782-e1677885322904.jpg?quality=100&strip=info'
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
      title: 'CasaLyona',
      giro:'Spa',
      link: 'https://casalyona.addac.tech/',
      img: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/03/f1-formula-1-checo-perez-GettyImages-1247675782-e1677885322904.jpg?quality=100&strip=info'
    },
    {
      id: 2,
      title: 'La Taqueria',
      giro:'Restaurante',
      link: 'https://casalyona.addac.tech/',
      img: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/03/f1-formula-1-checo-perez-GettyImages-1247675782-e1677885322904.jpg?quality=100&strip=info'
    },
    {
      id: 3,
      title: 'Las Delicias',
      giro:'Restaurante',
      link: 'https://casalyona.addac.tech/',
      img: 'https://cnnespanol.cnn.com/wp-content/uploads/2023/03/f1-formula-1-checo-perez-GettyImages-1247675782-e1677885322904.jpg?quality=100&strip=info'
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


  return (
    <div className='sm:py-2 sm:pr-2'>
      <div className='w-full bg-[#121212] sm:rounded-md p-5'>
        <div>
          <h1 className='font-bold text-3xl text-white'>Hola Mundo!</h1>
          <p className='text-white'>Programador front-end, potenciando el crecimiento de tu empresa ofreciendo comunicacion continua para obtener los mejores resultados.</p>
          <p className='text-[#a7a7a7]  '>-Alexis Aguilar</p>
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
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 overflow-hidden md:mx-auto'>
        {
          potenciados.map(potenciado =>(
            <div className='my-5 max-w-16 lg:w-44' key={potenciado.id}>
              <Jobs refe={potenciado.link} img={potenciado.img} nombre={potenciado.title} desc={potenciado.giro} />
            </div>
          ))
        }
        </div>
        
        <h1 className='font-bold text-white text-2xl mt-5'>Mis proyectos personales:</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 overflow-hidden md:mx-auto'>
        {
          personales.map(personal =>(
            <div className='my-5 max-w-16 lg:w-44 ' key={personal.id}>
              <Jobs img={personal.img} nombre={personal.title} desc={personal.giro}/>
            </div>
          ))
        }
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Content
