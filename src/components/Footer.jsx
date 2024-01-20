import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="text-white text-center mb-4">
      <div>
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
        </div>
        <div className="flex justify-center">
          <AiOutlineMail className="my-auto" />
          <span className="ml-1">aguilar.chavez.alexis.daniel@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
