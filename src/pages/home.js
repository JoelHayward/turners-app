import { Link } from "react-router-dom";
import './home.css'
import logo from '../images/turnerslogo.jpg'
import carimage from '../images/carimage.jpg'
import footer from '../images/turnersfooter.png'

import { Chatbot } from "../components/Chatbot";

export default function Home() {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo"></img>
        <div className="contact-head">
        <p>0800 887 637</p>
        <p>Find Us</p>
        </div>
      </div>
      <div>
        <nav className="navbar">
          <Link className="link" to="/search">&#x1F50D; Find a Car</Link>
        </nav>
        <div>
          <img src={carimage} alt='hero'></img>
        </div>
      </div>
      <div>
        <img className="footer" src={footer} alt="footer"></img>
      </div>
      <div>
        <Chatbot></Chatbot>
      </div>
    </div>
  );
}
