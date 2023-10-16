import React from 'react'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

function Footer() {
  return (
    <div className='text-white text-center items-center'> {/*mt-44*/}
        <div>
            <div className='flex justify-center text-[#17d760] mt-2 mb-4'>
                <a href='https://www.linkedin.com/in/alexis-daniel-aguilar-chavez-65a325274' target='blank'><FaLinkedin size={50}/></a>
                <a href='https://github.com/AddAcTech' target='blank' className='mx-4'><FaGithubSquare size={50}/></a>
            </div>
            <div className='flex justify-center'>
                <AiOutlineMail className='my-auto'/><span className='ml-1'>aguilar.chavez.alexis.daniel@gmail.com</span>
            </div>
        </div>
    </div>
  )
}

export default Footer