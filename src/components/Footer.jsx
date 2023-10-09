import React from "react";
import {Envelope, Github, Instagram, Whatsapp} from 'react-bootstrap-icons'

export const Footer = () => {
    return <>
     <footer className="bg-dark text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFF"
            fill-opacity="1"
            d="M0,320L24,298.7C48,277,96,235,144,229.3C192,224,240,256,288,261.3C336,267,384,245,432,224C480,203,528,181,576,176C624,171,672,181,720,208C768,235,816,277,864,288C912,299,960,277,1008,272C1056,267,1104,277,1152,256C1200,235,1248,181,1296,160C1344,139,1392,149,1416,154.7L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
        <div className="container px-4 py-2">
          <section className="text-center mb-4">
            <a
              className="btn btn-outline-light btn-floating mx-1"
              target="_blank"
              href= 'https://www.instagram.com/agnaarr_'
              role="button"
              ><Instagram /></a>
            <a className="btn btn-outline-light btn-floating mx-1" target="_blank" id="profile-link" href= 'https://github.com/Agnaar' role="button"
              ><Github /></a>
            <a
              className="btn btn-outline-light btn-floating mx-1"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=6283838935091"
              role="button"
              ><Whatsapp /></a>
            <a
              className="btn btn-outline-light btn-floating mx-1"
              target="_blank"
              href="https://mail.google.com/mail/u/0/?fs=1&to=agnaar218@gmail.com&tf=cm"
              role="button"
              ><Envelope /></a>
          </section>
        </div>
      
        <section className="text-center pt-0 pb-5">
          <p className="mb-0 fs-5 pb-2">
            Created by
            <a
              className="text-white fw-bold"
              style={{textDecoration:'none'}}
              href="portofolio bootstrap 5/test-portfolio.html"
              target="_blank"
              >Agna Ar</a
            >
          </p>
          <p className="mb-0 pb-2">
            Powered by
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bootstrap"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z"
              />
              <path
                d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"
              />
            </svg>
          </p>
        </section>
      </footer>
    </>
}