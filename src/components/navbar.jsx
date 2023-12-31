import React from "react";

export const NavBar = () => {
    return <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>Portofolio
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#welcome-section">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutme">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
}