import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/navbar'
import { Jumbotron } from './components/jumbotron'
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

function App() {
  const instagramLink = 'https://www.instagram.com/agnaarr_';
  const gitHubLink = 'https://github.com/Agnaar';

  return (
    <div>
      <NavBar />
      <Jumbotron />
      <AboutMe />
      <Contact />
      <Footer instagramLink={instagramLink} gitHubLink={gitHubLink} />
    </div>
  );
}

export default App;

