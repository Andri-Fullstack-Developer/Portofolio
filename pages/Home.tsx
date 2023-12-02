// index.tsx
import React, { use, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faHeart, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faReceipt, faAward } from "@fortawesome/free-solid-svg-icons";
import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";
import { faInstagram, faLinkedin, faWhatsapp, faEnvira } from "@fortawesome/free-brands-svg-icons";
import SplashScreen from "./Components/SplashScreen/SplashScreen";

import ParticlesBackground from "./Components/bacgrounfParticles";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

function Home() {
  const whatsappNumber = "6281249192305";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const emailAddress = "a8461565@gmail.com";
  const emailLink = `mailto:${emailAddress}`;
  const instagramLink = "https://www.instagram.com/4ndev/?hl=en";
  const linkedinLink = "https://www.linkedin.com/in/4ndr1-25-2a9b86221/";

  return (
    <div className="h-screen w-full  flex flex-col justify-center items-center">
      <ParticlesBackground />
      <GlobalStyle />
      {/* <Paf/> */}
      <div className="w-11/12 lg:w-7/12 text-white p-3 flex flex-col justify-center items-center">
        <Link href={"./Components/About/about"} className="w-full mb-3" passHref>
          <button className="border-2 border-white rounded-full w-full p-2  overflow-hidden transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="ms-4">About</span>
          </button>
        </Link>
        <Link href={"./Components/Sertifiaksi/Sertifikasi"} className="w-full mb-3 ">
          <button className="border-2 border-white rounded-full w-full p-2 overflow-hidden transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faAward} />
            <span className="ms-4">Sertifikat</span>
          </button>
        </Link>
        <Link href={"./Components/Porto/portofolio"} className="w-full mb-3 ">
          <button className="border-2 border-white rounded-full w-full p-2 overflow-hidden transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faHeart} />
            <span className="ms-4">Portofollio</span>
          </button>
        </Link>
        <Link href={"./Components/Galery/galery"} className="w-full mb-3 ">
          <button className="border-2 border-white rounded-full w-full p-2 overflow-hidden transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faEnvira} />
            <span className="ms-4">Galery</span>
          </button>
        </Link>
        <Link href={instagramLink} target="_" className="w-full mb-3 ">
          <button className="border-2 border-white rounded-full w-full p-2 overflow-hidden transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="ms-4">Instragram</span>
          </button>
        </Link>
        <Link href={linkedinLink} target="_" className="w-full mb-3 ">
          <button className="border-2 border-white rounded-full w-full p-2 overflow-hidden transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="ms-4">Linkedin</span>
          </button>
        </Link>
        <Link href={emailLink} className="w-full mb-3 ">
          <button className="border-2 border-white rounded-full w-full p-2 overflow-hidden transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="ms-4">Email</span>
          </button>
        </Link>
        <Link href={whatsappLink} className="w-full mb-3 ">
          <button className="border-2 border-white rounded-full w-full p-2 overflow-hidden transform transition-transform duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span className="ms-4">Whatsapp</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
