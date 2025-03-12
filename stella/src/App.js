import { useEffect, useState } from "react";
import { Link, Element, scroller } from 'react-scroll';
import './App.css';
import StellaImage from "./assets/images/stella-patrocinio.png";
import Logo from "./assets/images/logo.png";
import Cartaz1 from "./assets/images/Cartaz1.png";
import Audio01 from "./assets/Audios/01.mp3";
import Realizacao from "./assets/images/realizacao.png";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [isLibrasModalOpen, setIsLibrasModalOpen] = useState(false);

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
      <div className="realizacao-container">
        <img src={Realizacao} alt="Realização" className="realizacao-image"/>
      </div>
      <Modal isOpen={isAudioModalOpen} onClose={() => setIsAudioModalOpen(false)}>
        <div className="audio-modal-content">
          <h3>Audiodescrição</h3>
          <audio controls>
            <source src="./assets/audio/audiodescricao.mp3" type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </Modal>

      <Modal isOpen={isLibrasModalOpen} onClose={() => setIsLibrasModalOpen(false)}>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Libras"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
      <div className="diagonal-blue"></div>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo"/>
      </div>
      <div className="hero-container">
        <div className="text-content">
          <h1 className="title">FALATÓRIO NA RUA</h1>
          <h2 className="author">Stella do Patrocínio</h2>
        </div>
        <div className="image-content">
          <img src={StellaImage} alt="Stella do Patrocínio" className="stella-image"/>
        </div>
      </div>
      <div className="diagonal-red"></div>

      {/* Página One */}
      <Element name="one">
        <PageSection
          id="one"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
        </PageSection>
      </Element>

      {/* Página Two */}
      <Element name="two">
        <PageSection
          id="two"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Three */}
      <Element name="three">
        <PageSection
          id="three"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Four */}
      <Element name="four">
        <PageSection
          id="four"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Five */}
      <Element name="five">
        <PageSection
          id="five"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Six */}
      <Element name="six">
        <PageSection
          id="six"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Seven */}
      <Element name="seven">
        <PageSection
          id="seven"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Eight */}
      <Element name="eight">
        <PageSection
          id="eight"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Nine */}
      <Element name="nine">
        <PageSection
          id="nine"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Ten */}
      <Element name="ten">
        <PageSection
          id="ten"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          onOpenAudioModal={() => setIsAudioModalOpen(true)}
          onOpenLibrasModal={() => setIsLibrasModalOpen(true)}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>
    </div>
  );
}

// Componente reutilizável para as páginas
function PageSection({ id, title, text, children, onOpenAudioModal, onOpenLibrasModal }) {
  return (
    <div className="page-section" id={id}>
      {children}
      <div className="section-content">
        <div className="title-container">
          <h1>{title}</h1>
          <div className="title-description">
            Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular.
          </div>
        </div>
        <div className="content-flex">
          <div className="left-content">
            <img src={Cartaz1} alt="Cartaz 1" className="cartaz-image" />
            <div className="audio-section">
              <h3 className="section-title">Ouça o trecho</h3>
              <audio controls>
                <source src={Audio01} type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
            <div className="map-container">
              <h3 className="section-title">Onde encontrar o cartaz</h3>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219020248!2d-43.4139278!3d-22.9039889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdff7f78c667f%3A0x3a826b2a7f00c426!2sCol%C3%B4nia%20Juliano%20Moreira!5e0!3m2!1spt-BR!2sbr!4v1710795046815!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="accessibility-section">
              <h3 className="section-title">Acessibilidade</h3>
              <div className="accessibility-buttons">
                <button className="accessibility-btn" onClick={onOpenAudioModal}>
                  <span className="icon">🔊</span>
                  Audiodescrição
                </button>
                <button className="accessibility-btn" onClick={onOpenLibrasModal}>
                  <span className="icon">👋</span>
                  Libras
                </button>
              </div>
            </div>
            <h3 className="section-title">Baixe o cartaz</h3>
            <button className="accessibility-btn" onClick={onOpenLibrasModal}>
              Baixe Aqui
            </button>
          </div>
          <div className="text-content-section">
            <p>O trecho em destaque integra o material reunido por Mônica Ribeiro de Souza, que atuou como estagiária voluntária de psicologia na Colônia Juliano Moreira entre 1990 e 1991. Em seu relatório final de estágio, entregue em formato de livro e intitulado VERSOS, REVERSOS, PENSAMENTOS e algo mais..., Mônica apresenta transcrições versificadas do Falatório de Stella do Patrocínio. Seu trabalho foi fundamental para a trajetória textual de Stella, não apenas em termos de registro, mas também por ter sido o primeiro a reconhecer e nomear seu estatuto artístico-intelectual, em vez de mera patologia, além de questionar a internação involuntária de Stella. Em seu prefácio em forma de carta, Mônica diz a Stella:</p>

            <blockquote>"Quem olhar para você e atentar apenas na sua exterioridade e se prender ao rótulo da loucura, perderá a oportunidade e a chance de se defrontar com a genialidade de alguns poucos privilegiados a quem a Arte e a Filosofia, dois dos dotes mais elevados dos seres humanos, saturaram com seus atributos. Fico a conjecturar se os grandes vultos da humanidade nas artes, na ciência, na música, na literatura, tivessem, quando ainda no anonimato, sido encontrados pela viatura de alguma delegacia policial, cumprindo seu dever de recolher das ruas os vadios, se não os teria sequestrado e trancado num hospício, com a sigla da instituição no uniforme, de onde, talvez, jamais saíssem."</blockquote>

            <p>"Eu sou Stella do Patrocínio / Bem patrocinada" integra um texto mais amplo, do qual podemos destacar os questionamentos de Stella a respeito das ideias científicas e socialmente impostas a respeito do corpo, da mente, seus lugares no mundo, e como isso se relaciona – inclusive por meio de uma perspectiva racial – com os atos de nomeação e autonomeação. O trocadilho com o próprio nome, aliás, soa como uma provocação a essas designações fabricadas.</p>

            <div className="poem">
              <div className="verse">É dito: pelo chão você não pode ficar</div>
              <div className="verse">Porque lugar de cabeça é na cabeça</div>
              <div className="verse">Lugar de corpo é no corpo</div>
              <div className="verse">Pelas pareces também você não pode</div>
              <div className="verse">Pelas camas também você não vai poder ficar</div>
              <div className="verse">Pelo espaço vazio também você não vai poder ficar</div>
              <div className="verse">Porque lugar de cabeça é na cabeça</div>
              <div className="verse">Lugar de corpo é no corpo</div>
              <div className="verse">Eu sou Stella do Patrocínio</div>
              <div className="verse">Bem patrocinada</div>
              <div className="verse">Estou sentada numa cadeira</div>
              <div className="verse">Pegada numa mesa nêga preta e criola</div>
              <div className="verse">E eu sou uma nêga preta e criola</div>
              <div className="verse">Que a Ana me disse</div>
            </div>
            <p className="curator-text">Texto curatorial por Sara Ramos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
