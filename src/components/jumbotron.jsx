import React from "react";
import FotoProfil from '../assets/WhatsApp Image 2023-09-21 at 21.57.49.jpg'

export const Jumbotron = () => {
    return <>
    <section className="jumbotron text-center" id="welcome-section" style={{ height: '100vh' }}>
        <img src={FotoProfil} alt="Agna Ar" width="250px" className="foto-profil"/>
        <h1 className="display-4">Agna Abdul Rauf</h1>
        <p className="lead">Purwadhika Student</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L40,69.3C80,107,160,181,240,176C320,171,400,85,480,69.3C560,53,640,107,720,138.7C800,171,880,181,960,197.3C1040,213,1120,235,1200,213.3C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
}