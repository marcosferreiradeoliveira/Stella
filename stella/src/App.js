import { motion } from "framer-motion";
import './App.css';
import StellaImage from "./stella-patrocinio.png";
import One from './pages/One';
import Two from './pages/Two';
import { Link, Element } from 'react-scroll';

export default function HomePage() {
  return (
    <div className="layout">
      {/* Seções diagonais */}
      <div className="diagonal blue"></div>
      <div className="diagonal green">
        <div className="container">
          <div className="text-container">
            <p className="subtitle">artes para lambe-lambe</p>
            <h1 className="title">FALATÓRIO NA RUA</h1>
            <h2 className="author">Stella do Patrocínio</h2>
            <div className="links">
              <Link to="one" smooth={true} duration={500} className="nav-link">Ir para Página 1</Link>
              <Link to="two" smooth={true} duration={500} className="nav-link">Ir para Página 2</Link>
            </div>
          </div>
          <div className="image-container">
            <img src={StellaImage} alt="Stella do Patrocínio" className="stella-image"/>
          </div>
        </div>
      </div>
      <div className="diagonal red"></div>

      {/* Páginas One e Two abaixo */}
      <Element name="one">
        <div className="page-section"><One /></div>
      </Element>
      <Element name="two">
        <div className="page-section"><Two /></div>
      </Element>
    </div>
  );
}
