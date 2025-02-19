import { useEffect } from "react";
import { Link, Element, scroller } from 'react-scroll';
import './App.css';
import StellaImage from "./stella-patrocinio.png";

export default function HomePage() {
  // Rola suavemente para a âncora ao carregar a página
  useEffect(() => {
    const hash = window.location.hash.replace("#", ""); // Obtém a âncora da URL
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 500,
        smooth: true,
      });
    }
  }, []);

  return (
    <div className="layout">
      {/* Seções diagonais */}
      <div className="diagonal blue"></div>
      <div className="diagonal green">
        <div className="container">
          <div className="text-container">
            {/* O TEXTO AGORA FICARÁ RETO */}
            <p className="subtitle">artes para lambe-lambes</p>
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

      {/* Página One */}
      <Element name="one">
        <PageSection
          id="one"
          title="Página 1"
          text="Este é um parágrafo de texto na página 1. Aqui você pode adicionar mais informações sobre o conteúdo."
        />
      </Element>

      {/* Página Two */}
      <Element name="two">
        <PageSection
          id="two"
          title="Página 2"
          text="Este é um parágrafo de texto na página 2. Aqui você pode adicionar mais informações sobre o conteúdo."
        />
      </Element>
    </div>
  );
}

// Componente reutilizável para as páginas
function PageSection({ id, title, text }) {
  return (
    <div className="page-section" id={id}>
      <h1>{title}</h1>
      <div className="content">
        <div className="text-and-map">
          <p>{text}</p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.075426745292!2d-46.65342658440738!3d-23.565734367638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1633039390000!5m2!1spt-BR!2sbr"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <audio controls>
          <source src="audio-file.mp3" type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <img src={StellaImage} alt="Stella do Patrocínio" className="stella-image" />
      </div>
    </div>
  );
}
