import './App.css';
import Doctor_1 from './assets/Doctor_1.png';
import Doctor_2 from './assets/doctor_desktop.png';
import Doctor_3 from './assets/doctor3.png';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { Calendar } from 'primereact/calendar';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faHeartPulse , faCircleInfo,faEnvelope,faPhone,faHashtag} from '@fortawesome/free-solid-svg-icons';





function App() {
  const center = useMemo(() => ({ lat: 33.6770467, lng: -7.396014603127731 }), []);
  const {isLoaded}=  useLoadScript({googleMapsApiKey :"AIzaSyB3hzZNbL5PNW6r3ZmEbFGIRSEZ1dHFzjM" });
  if (!isLoaded){return <div>loading...</div>}
  return (
    <div className="App">
      {/* navBar */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="navbar-logo" id='Home'>Nissrine Zidane</a>
        </div>
        <div className="navbar-right">
          <a href="#Home" className="navbar-link">Accueil</a>
          <a href="#About" className="navbar-link">A propos</a>
          <a href="#Reser" className="navbar-link">Reservation</a>
          <a href="#Footer" className="navbar-link">Contact</a>
        </div>
      </nav>

      {/* Picture+Text Home */}
      <div className='Home'>
        <div className="Text_Home">
          <p>La <span>santé</span>  est le support de notre vie, l'oublier c'est ôter l'essence à notre survie</p>
        </div>
        <div className="Picture_Home">
          <img src={Doctor_1} alt="doctor" />
        </div>

        {/* Button Home */}
      </div>
      <div className='Button_Help'>
        <button type="button" className="Button" id='help' onClick={() => alert('Remplir la formulaire avec votre Coordonnees est votre reservation va se prendre')}><a href="#Reser">Comment Sa marche ?</a></button>
      </div>

      {/* About Us */}
      <div className="About">
        <div className="About_1">
          <div className="Pic1" id='About'> <img src={Doctor_2} alt="Doctor in Desk" /></div>
            <div className="Desc1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </div>
        <div className="About_2">
          <div className="Desc2"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
          <div className="Pic2">
            <img src={Doctor_3} alt="Doctor stanfing"/>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className='form' id='Reser'>
            <h1>Reservation</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nom Complet *</Form.Label>
                    <Form.Control type="text" className='inp' placeholder="Nom Complet" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Numéro de Telephone</Form.Label>
                    <Form.Control type="tel" className='inp' placeholder="Numéro de Telephone" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Numéro CIN *</Form.Label>
                    <Form.Control type="text" className='inp' placeholder="Numéro CIN" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control type="email" className='inp' placeholder="Adresse Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date</Form.Label>
                    <Calendar dateFormat="dd/mm/yy" className='inp' showTime hourFormat="24" />
                </Form.Group>
                <input variant="primary" className='btn' type='submit' value="Envoyer vos informations  "/>
                    
                
            </Form>
        </div>
        {/* Footer */}
        <div className="footter" id='Footer'>
          <div className="Container1">
            <div className='map'>
            <GoogleMap zoom={16} center={center} mapContainerClassName="map-container">
                <MarkerF position={center}/>
            </GoogleMap> 
            </div>
            <div className="CordName">
            <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFFFFF",}} /> Bd de la Résistance, Mohammédia
            </div>
            <div className="Name">
            <FontAwesomeIcon icon={faHeartPulse} style={{color: "#FFFFFF",}} /> Nissrine Zaidane
            </div>
          </div>
          <div className="info">
            <div className="TitleFooter">
            <FontAwesomeIcon icon={faCircleInfo} style={{color: "#FFFFFF",}} />
            &nbsp; Information</div>
            <div><a href='#Reser'>Reservation</a></div>
            <div><a href='#help'>Comment sa Marche ?</a></div>
            <div><a href='#About'>Cabinet Information</a></div>
            <div><a href=''>Contact</a></div>
          </div>
          <div className="Contact">
            <button type="button" className="ButtonContac" id='Contact'><a href = "mailto: Nissrine.zaidane@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} id='MailIcon' /> Contacter Nous </a></button>
          </div>
          <div className="resSoc">
            <a href="tel:+212603907898"target="_blank"><FontAwesomeIcon icon={faPhone}  style={{color: "#FFFFFF",}} size="2xl" /></a>
            <a href="http://linktr.ee/nissrinezaidane"target="_blank"><FontAwesomeIcon icon={faHashtag} style={{color: "#FFFFFF",}} size="2xl"/></a>
          </div>
        </div>
    </div>
  );
}

export default App;