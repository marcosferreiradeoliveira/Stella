import { useEffect, useState } from "react";
import { Link, Element, scroller } from 'react-scroll';
import './App.css';
import StellaImage from "./assets/images/stella-patrocinio.png";
import Logo from "./assets/images/logo.png";
import Cartaz1 from "./assets/images/Cartaz1.png";
import Cartaz2 from "./assets/images/Cartaz2.png";
import Cartaz3 from "./assets/images/Cartaz3.png";
import Cartaz4 from "./assets/images/Cartaz4.png";
import Cartaz5 from "./assets/images/Cartaz5.png";
import Cartaz6 from "./assets/images/Cartaz6.png";
import Cartaz7 from "./assets/images/Cartaz7.png";
import Cartaz8 from "./assets/images/Cartaz8.png";
import Cartaz9 from "./assets/images/Cartaz9.png";
import Cartaz10 from "./assets/images/Cartaz10.png";
import Audio01 from "./assets/Audios/01.mp3";
import Audio2 from "./assets/Audios/2.mp3";
import Audio3 from "./assets/Audios/3.mp3";
import Audio4 from "./assets/Audios/4.mp3";
import Audio5 from "./assets/Audios/5.mp3";
import Audio6 from "./assets/Audios/6.mp3";
import Audio7 from "./assets/Audios/7.mp3";
import Audio8 from "./assets/Audios/8.mp3";
import Audio9 from "./assets/Audios/9.mp3";
import Realizacao from "./assets/images/realizacao.png";
import StellaRetrato from "./assets/images/STELLA.png";
import EquipeMob from "./assets/images/equipe-mob.jpg.webp";
import ProjetoImg from "./assets/images/projeto.png";

// Constantes para audiodescrições (indisponíveis no momento)
const AudioDesc1 = null;
const AudioDesc2 = null;
const AudioDesc3 = null;
const AudioDesc4 = null;
const AudioDesc5 = null;
const AudioDesc6 = null;
const AudioDesc7 = null;
const AudioDesc8 = null;
const AudioDesc9 = null;
const AudioDesc10 = null;

function Modal({ isOpen, onClose, children, audioDescription, librasVideoId }) {
  const [audioError, setAudioError] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
        {audioDescription && (
          <div className="audio-modal-content">
            <h3>Audiodescrição</h3>
            {audioDescription !== null ? (
              <audio controls onError={() => setAudioError(true)}>
                <source src={audioDescription} type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            ) : (
              <p>Audiodescrição não disponível no momento.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Componente para páginas introdutórias
function IntroSection({ 
  id, 
  title, 
  textContent,
  image,
  children 
}) {
  return (
    <div className="intro-section" id={id}>
      {children}
      <div className="intro-content">
        <div className="intro-title-container">
          <h2>{title}</h2>
        </div>
        {image && (
          <div className="intro-image-container">
            <img src={image} alt={title} className="intro-image" />
          </div>
        )}
        <div className="intro-text-content">
          {textContent}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [isLibrasModalOpen, setIsLibrasModalOpen] = useState(false);
  const [currentAudioDescription, setCurrentAudioDescription] = useState("");
  const [currentLibrasVideoId, setCurrentLibrasVideoId] = useState("");

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

  const handleOpenAudioModal = (audioFile) => {
    if (!audioFile) {
      console.log('No audio file provided');
      return;
    }
    console.log("Opening audio modal with file:", audioFile);
    try {
      setCurrentAudioDescription(audioFile);
      setIsAudioModalOpen(true);
    } catch (error) {
      console.error('Error opening audio modal:', error);
    }
  };

  const handleOpenLibrasModal = (librasVideoId) => {
    if (!librasVideoId) {
      console.log('No video ID provided');
      return;
    }
    setCurrentLibrasVideoId(librasVideoId);
    setIsLibrasModalOpen(true);
  };

  return (
    <div className="layout">
      <div className="realizacao-container">
        <img src={Realizacao} alt="Realização" className="realizacao-image"/>
      </div>
      <Modal 
        isOpen={isAudioModalOpen} 
        onClose={() => setIsAudioModalOpen(false)}
      >
        <div className="audio-modal-content">
          <h3>Audiodescrição</h3>
          <audio controls>
            <source src={currentAudioDescription} type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </Modal>

      <Modal 
        isOpen={isLibrasModalOpen} 
        onClose={() => setIsLibrasModalOpen(false)}
        librasVideoId={currentLibrasVideoId}
      >
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${currentLibrasVideoId}`}
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

      {/* Menu de Navegação */}
      <nav className="navigation-menu">
        <Link to="project" smooth={true} duration={500}>Sobre o Projeto</Link>
        <Link to="stella" smooth={true} duration={500}>Stella do Patrocínio</Link>
        <Link to="mobcontent" smooth={true} duration={500}>mobCONTENT</Link>
        <Link to="one" smooth={true} duration={500}>Falatório</Link>
      </nav>

      {/* Página Sobre o Projeto */}
      <Element name="project">
        <IntroSection
          id="project"
          title="Sobre o Projeto"
          image={ProjetoImg}
          textContent={
            <>
              <p>Um projeto que presta homenagem à vida e obra de Stella do Patrocínio, cuja voz e prática da palavra– o seu Falatório– nos deixam um imenso legado poético-artístico e de resistência às políticas manicomiais.</p>
              
              <p>Através da instalação de lambe-lambes, em uma área total de 60m², nas ruas de Botafogo, onde Stella foi sequestrada, celebramos sua contribuição à cultura brasileira e destacamos sua jornada de enfrentamento às estigmatizações relacionadas ao racismo e à ideia de loucura.</p>
              
              <p>Artistas locais e membros da comunidade colaboram na criação dos lambe-lambes, incorporando elementos da vida de Stella, suas palavras e sua luta pela liberdade artística e mental.</p>
              
              <p>Os áudios que registram a voz de Stella do Patrocínio estão em domínio público, permitindo o acesso gratuito ao seu Falatório. Cada lambe-lambe terá um QR code que direcionará para o trecho em áudio descrito no cartaz.</p>

              <div className="team-box">
                <h3>EQUIPE:</h3>
                <p>Criação, Direção, Produção Executiva: Marcos Ferreira</p>
                <p>Curadoria: Sara Ramos</p>
                <p>Produção: Johanna Beringer e Victória Pasqual</p>
                <p>Design: Maria Mariana Costas</p>
              </div>
            </>
          }
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </IntroSection>
      </Element>

      {/* Página Stella do Patrocínio */}
      <Element name="stella">
        <IntroSection
          id="stella"
          title="Stella do Patrocínio"
          image={StellaRetrato}
          textContent={
            <>
              <p>Stella do Patrocínio (Rio de Janeiro, 1941-1992) foi uma artista brasileira que, através da palavra oral, criou um estilo estético-político e artístico singular. Aos 21 anos, foi detida pela polícia enquanto caminhava na rua Voluntários da Pátria, em Botafogo, e encaminhada para instituições manicomiais. Permaneceu internada por três décadas na Colônia Juliano Moreira, onde desenvolveu seu Falatório: uma prática da palavra que, registrada em áudio na década de 1980, compõe hoje um dos mais importantes legados da cultura brasileira.</p>
              
              <p>Suas falas, que denunciam a violência manicomial e seus racismos, questionam as noções de normalidade, saúde e doença, além de propor uma reflexão profunda sobre a liberdade, o direito à cidade e o direito de existir. Através de uma linguagem única, que combina refinamento estético e força política, Stella criou conceitos como "malezinho prazeres" e elaborou uma crítica contundente às instituições e seus cientificismos.</p>
              
              <p>Embora tenha falecido em 1992, sem jamais ter saído da Colônia Juliano Moreira, seu Falatório segue ecoando e inspirando artistas, pesquisadores e movimentos sociais. Em 2001, foi publicado o livro "Reino dos bichos e dos animais é o meu nome", organizado por Viviane Mosé. Em 2022, foi tema da dissertação "Stella do Patrocínio: entre a letra e a negra garganta de carne", de Sara Ramos.</p>
            </>
          }
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </IntroSection>
      </Element>

      {/* Página mobCONTENT */}
      <Element name="mobcontent">
        <IntroSection
          id="mobcontent"
          title="mobCONTENT"
          image={EquipeMob}
          textContent={
            <>
              <p>A mobCONTENT é uma produtora audiovisual especializada em projetos de impacto cultural, social e ambiental, utilizando tecnologias de ponta tanto como tema quanto na produção de conteúdos inovadores. Sob a liderança de Marcos Ferreira, premiado pelo British Council como Young Creative Entrepreneur, a empresa se destacou internacionalmente em festivais como Sunny Side of the Doc, SXSW e Power to the Pixel, além de premiações no Brasil.</p>
              
              <p>Suas produções incluem séries e documentários para Canal Futura, Canal Brasil, Canal Curta e Sebrae, além de projetos interativos para o Museu do Amanhã, Museu da Língua Portuguesa e Conservação Internacional. Entre seus clientes estão Fundação Roberto Marinho, British Council, Oi, Light e Webedia, consolidando-se como referência em inovação audiovisual.</p>
            </>
          }
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </IntroSection>
      </Element>

      {/* Header do Falatório */}
      <div className="falatorio-header">
        <h2>FALATÓRIO</h2>
        <p>Trechos selecionados da obra de Stella do Patrocínio</p>
      </div>

      {/* Página One */}
      <Element name="one">
        <PageSection
          id="one"
          title="Eu sou Stella do Patrocínio
Bem patrocinada."
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz1}
          audio=""
          textContent={
            <>
              <p>O trecho em destaque integra o material reunido por Mônica Ribeiro de Souza, que atuou como estagiária voluntária de psicologia na Colônia Juliano Moreira entre 1990 e 1991. Em seu relatório final de estágio, entregue em formato de livro e intitulado VERSOS, REVERSOS, PENSAMENTOS e algo mais..., Mônica apresenta transcrições versificadas do Falatório de Stella do Patrocínio. Seu trabalho foi fundamental para a trajetória textual de Stella, não apenas em termos de registro, mas também por ter sido o primeiro a reconhecer e nomear seu estatuto artístico-intelectual, em vez de mera patologia, além de questionar a internação involuntária de Stella. Em seu prefácio em forma de carta, Mônica diz a Stella:</p>
              <blockquote>"Quem olhar para você e atentar apenas na sua exterioridade e se prender ao rótulo da loucura, perderá a oportunidade e a chance de se defrontar com a genialidade de alguns poucos privilegiados a quem a Arte e a Filosofia, dois dos dotes mais elevados dos seres humanos, saturaram com seus atributos. Fico a conjecturar se os grandes vultos da humanidade nas artes, na ciência, na música, na literatura, tivessem, quando ainda no anonimato, sido encontrados pela viatura de alguma delegacia policial, cumprindo seu dever de recolher das ruas os vadios, se não os teria sequestrado e trancado num hospício, com a sigla da instituição no uniforme, de onde, talvez, jamais saíssem."</blockquote>
              <p>"Eu sou Stella do Patrocínio / Bem patrocinada" integra um texto mais amplo, do qual podemos destacar os questionamentos de Stella a respeito das ideias científicas e socialmente impostas a respeito do corpo, da mente, seus lugares no mundo, e como isso se relaciona – inclusive por meio de uma perspectiva racial – com os atos de nomeação e autonomeação. O trocadilho com o próprio nome, aliás, soa como uma provocação a essas designações fabricadas.</p>
            </>
          }
          poem={[
            "É dito: pelo chão você não pode ficar",
            "Porque lugar de cabeça é na cabeça",
            "Lugar de corpo é no corpo",
            "Pelas pareces também você não pode",
            "Pelas camas também você não vai poder ficar",
            "Pelo espaço vazio também você não vai poder ficar",
            "Porque lugar de cabeça é na cabeça",
            "Lugar de corpo é no corpo",
            "Eu sou Stella do Patrocínio",
            "Bem patrocinada",
            "Estou sentada numa cadeira",
            "Pegada numa mesa nêga preta e criola",
            "E eu sou uma nêga preta e criola",
            "Que a Ana me disse"
          ]}
          curatorText="Texto curatorial por Sara Ramos"
          audioDescription={AudioDesc1}
          librasVideoId="VIDEO_ID_01"
          onOpenAudioModal={() => {
            console.log("Opening audio for page 1"); // Debug log
            handleOpenAudioModal(AudioDesc1);
          }}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_01")}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
        </PageSection>
      </Element>

      {/* Página Two */}
      <Element name="two">
        <PageSection
          id="two"
          title="Mas eu estava com saúde, estava com muita saúde,
Me adoeceram, me internaram no hospital
E me deixaram internada,
E agora eu vivo no hospital como doente."
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz10}
          audio=""
          poem={[
            "Eu estava com saúde, adoeci,",
            "Eu não ia adoecer sozinha, não,",
            "Mas eu estava com saúde, estava com muita saúde,",
            "Me adoeceram, me internaram no hospital",
            "E me deixaram internada,",
            "E agora eu vivo no hospital como doente,",
            "O hospital parece uma casa,",
            "O hospital é um hospital.",
            "(VERSOS, REVERSOS, pensamentos e algo mais..., 1991, p. 16)."
          ]}
          textContent={
            <>
              <p>Este recorte do Falatório integra o material reunido por Mônica Ribeiro de Souza, que atuou como estagiária voluntária de psicologia na Colônia Juliano Moreira entre 1990 e 1991. Em seu prefácio, Mônica afirma: "Sua história, Stella, é a história dos sequestrados da Sociedade como você, confinados nas instituições psiquiátricas, que usurparam para si o direito de determinar quem pode e tem condições de conviver na sociedade capitalista produtivista e quem não pode."

O trecho do Falatório que aqui destacamos faz parte de um dos muitos recortes em que Stella volta a nossa atenção para a violência manicomial e seus efeitos. Contrapondo as narrativas que quiseram colar sua figura e palavras a certo elogio ou proclamação da loucura – em conotações que frequentemente serviam aos fetiches literários –, Stella reitera, com esta fala, seu questionamento diante de sequestros arbitrário e internações involuntárias de corpos dissidentes, além de reforçar a denúncia e o testemunho do que compreende como a verdadeira causa de seu adoecimento: a própria instituição. 
</p>
            </>
          }
          curatorText="Texto curatorial por Sara Ramos"
          audioDescription={AudioDesc2}
          librasVideoId="VIDEO_ID_02"
          onOpenAudioModal={() => handleOpenAudioModal(AudioDesc2)}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_02")}
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Three */}
      <Element name="three">
        <PageSection
          id="three"
          title={[
            "É um malezinho prazeres /",
            "É tudo bom e nada presta"
          ]}
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz9}
          audio={Audio3}
          secondAudio={Audio6}
          textContent={
            <>
              <p>"É um malezinho prazeres" consta do arquivo CD2/01. No contexto desse diálogo com Carla Guagliardi, Stella afirma ter maus pensamentos e, ao descrevê-los, enumera uma série de ações e práticas violentas contra a família – termo que, aqui e em quase todo o Falatório, se refere à "família de cientistas", isto é, aos agentes manicomiais que a encarceraram e com quem foi obrigada a conviver.</p>
              <p>Esses pensamentos e essa fantasia, embora entrecortados pelo medo da retaliação, são descritos em detalhe: "se eu pegar a família toda de cabeça pra baixo e perna pra cima, meter tudo dentro da lata do lixo, e fazer um aborto, será que acontece alguma coisa comigo?". Assim, o "malezinho prazeres", conceito por ela criado, nomeia o desejo de devolver a violência àqueles que a violentam – "Matar a família toda. Que faça um carro, bote tudo morto e vá pra longe" – e, por esse motivo, vem sendo interpretado e estudado como retórica de resistência e revidação. Não é à toa que, ao tratar das oralituras afrobrasileiras, Leda Maria Martins nos lembra que a palavra falada "é, em si mesma, o acontecimento", ou seja, a fala efetiva aquilo que diz; por isso, quando pensamos que, hoje, o falatório e a voz Stella têm circulado cada vez mais, travando verdadeiras guerrilhas discursivas contra a cultura manicomial, denunciando os seus racismos e excessos, estamos testemunhando as forças que reverberam, através do tempo, o seu malezinho prazeres e demais construções.</p>
              <p>"É tudo bom e nada presta" é um recorte do arquivo CD2 / 02. Conversando com Carla Guagliardi, Stella recusa dois pedidos de sua interlocutora: para que cante uma música, para que recite poesia. Diz que está cansada de tanto falar. Em seguida, ambas trocam breves amenidades sobre objetos que estão por ali e, depois de certo silêncio, Stella recomeça:</p>
              <p>Eu sou seguida, acompanhada, imitada, assemelhada, tomada conta, fiscalizada, examinada, revistada. Tem esses que são iguaizinho a mim, tem esses que se veste se calça igual a mim, mas que são diferente... da diferença entre nós. É tudo bom e nada presta.</p>
              <p>Penso que sua fala nos leva refletir sobre as políticas de controle e homogeneização dos indivíduos impostas pela instituição manicomial e, ao mesmo tempo, sobre a recusa de Stella em ser reduzida a elas – à massa amorfa, sem voz e cultura que se projeta sobre os encarcerados. "É tudo bom e nada presta", como aponto em um trabalho anterior, parece ser uma referência à uma canção "Tudo é bom e nada presta", lançada em 1975 na voz de Marinês, no álbum A volta da Cangaceira. Quanto a escutamos, percebemos ainda outras dimensões dessa intertextualidade:</p>
            </>
          }
          poem={[
            "Mas você também é gente",
            "Que faz parte deste mundo",
            "Deste mundo tão imundo",
            "Que não sei quem enlameou",
            "Eu não sei quem é bom",
            "Eu não sei quem é mal",
            "Tudo é bom e nada presta",
            "Neste mundo desigual"
          ]}
          onOpenAudioModal={() => handleOpenAudioModal(AudioDesc3)}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_03")}
          audioDescription={AudioDesc3}
          footnotes=" RAMOS, Sara Martins. Stella do Patrocínio: entre a letra e a negra garganta de carne. Dissertação – Foz do Iguaçu: Universidade Federal da Integração Latino-Americana, 2022."
          curatorText="Texto curatorial por Sara Ramos"
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Four */}
      <Element name="four">
        <PageSection
          id="four"
          title="Equem vence um belo é um belo, quem vence o saúde é outra saúde, quem vence o normal é outro normal, quem vence um cientista é outro cientista"
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz4}
          audio={Audio5}
          textContent={
            <>
              <p>Um dos aspectos que mais chama atenção no Falatório de Stella do Patrocínio é a sua percepção acurada sobre como a instituição manicomial funciona à base da patologização sistemática da diferença e dos corpos considerados dissidentes. E, para além disso, suas falas apontam para o fato de que o verdadeiro adoecimento acontece ali dentro. Não é à toa que, no contexto do recorte acima – do arquivo CD2 / 01 – assim como em vários outros momentos, Stella aproxima suas vivências à realidade de um zoológico – "Reino dos bicho e dos animais é o meu nome. Jardim Zoológico Quinta da Boa Vista".</p>
              <p>O trecho destacado no lambe-lambe reverbera em um debate atemporal sobre como os diferentes campos do conhecimento – seja a ciência, a psiquiatria ou a literatura etc. –, são atravessados pelas dinâmicas sociopolíticas e, por isso mesmo, são capazes de subjugar, desumanizar e violentar.</p>
            </>
          }
          onOpenAudioModal={() => handleOpenAudioModal(AudioDesc4)}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_04")}
          audioDescription={AudioDesc4}
          curatorText="Texto curatorial por Sara Ramos"
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Five */}
      <Element name="five">
        <PageSection
          id="five"
          title="Eu sei que eu tomei cor. Nos gases eu me formei e tomei cor. [...] Era Rio de Janeiro, ainda era Botafogo…"
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz5}
          audio={Audio01}
          textContent={
            <>
              <p>Durante o Falatório, Stella se depara com a pergunta 'como você veio parar aqui [na Colônia Juliano Moreira]?' algumas vezes. Suas respostas, embora assumam tons estilísticos diversos – seja no uso de metáforas, na desordem cronológica ou nos indivíduos presentes –, mantêm uma constância narrativa sobre o momento do sequestro. Algumas dessas constâncias incluem o caminhar pelas ruas, a cor da sua pele e a menção ao bairro de Botafogo. Em linhas gerais, podemos afirmar que Stella tinha 21 anos de idade e andava na rua Voluntários da Pátria com Luís, um amigo, quando foi detida pela polícia e, em sequência, encaminhada a instituições manicomiais.</p>
              <p>O trecho destacado neste lambe-lambe, proveniente do arquivo CD1 / 01, não oferece muitos desses detalhes objetivos, mas o que sua escuta ampliada pode dimensionar para nós, ouvintes, é algo da sutileza subjetiva que dá forma às linguagens do trauma, inclusive em sua relação com os espaços: "tomar cor", aqui, transforma Stella e milhares de outros em corpo palpável, apreensível, passível de ter extirpada a liberdade.</p>
              <p>Quando, em outro momento de seu Falatório, Stella chama atenção para o fato de que ela era uma "nega preta e criola" andando na rua no instante em foi abduzida pelos agentes estatais, está novamente convocando nossos ouvidos a se atentarem para as dinâmicas raciais que regem as instituições, a circulação e o direito à cidade. Compreendendo que cada ação humana imprime memórias e vestígios aos lugares, o atual projeto buscar espalhar e devolver para as ruas as palavras e a presença de Stella do Patrocínio, posicionando-se ao seu lado nas disputas narrativas que envolvem os espaços urbanos.</p>
            </>
          }
          onOpenAudioModal={() => handleOpenAudioModal(AudioDesc5)}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_05")}
          audioDescription={AudioDesc5}
          curatorText="Texto curatorial por Sara Ramos"
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Six */}
      <Element name="six">
        <PageSection
          id="six"
          title="Fui parar no mais longe possível
Continuei seguindo pro mais longe possível
Cheguei e voltei
"
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz6}
          audio={Audio8}
          textContent={
            <>
              <p>Este trecho integra os momentos finais do último arquivo de áudio registrado na CJM. Nele, Stella lista alguns nomes de pacientes que passaram pelo Teixeira Brandão, o núcleo feminino da instituição. Price, uma dessas mulheres, aparece como alguém que era bondosa com Stella e que a mandou "seguir viagem". Dentre as múltiplas camadas que podemos escutar a partir desse diálogo, algumas se destacam. A menção a companheiras que também passaram por ali é simbólica: pode-se notar a reverência e o respeito com que Stella enuncia os seus nomes, ciente de que sua história não é única e tampouco um caso isolado. O tema da viagem, um tópico caro e recorrente nas falas de Stella, que era afeita às caminhadas pela cidade e se autonomeava "viajante" e "viajada", também traduz o desejo de escapar e sair para além dos muros e portões. Sabemos que, em vida, isso não foi possível para Stella depois de ter sido sequestrada aos 21 anos. Seu falatório, no entanto, circula e chega a cada vez mais pessoas: a sua voz e o seu legado vêm dobrando o tempo, seguindo, como ela mesma diz, "pro mais longe possível". </p>
            </>
          }
          poem={[
            "Carla Guagliardi: Quem é Price?",
            "Stella do Patrocínio: Era uma paciente que morava aqui no Teixeira",
            "C: Hm. Você gostava dela?",
            "S: Gostava, ela era muito boazinha. Teve gavetas de ferro me botou dentro de todas as gavetas... de ferro, e mandou encaminhar, seguir viagem",
            "C: Pra onde?",
            "S: Pro mais longe possível",
            "C: E aonde cê foi parar?",
            "S: Fui parar no mais longe possível",
            "C: E aí que que cê fez nesse mais longe possível?",
            "S: Continuei seguindo pro mais longe possível",
            "C: Chegou?",
            "S: Cheguei e voltei"
          ]}
          onOpenAudioModal={() => handleOpenAudioModal(AudioDesc6)}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_06")}
          audioDescription={AudioDesc6}
          curatorText="Texto curatorial por Sara Ramos"
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Seven */}
      <Element name="seven">
        <PageSection
          id="seven"
          title="Eu já falei em excesso, em acesso, muito e demais, declarei expliquei esclareci tudo, falei tudo que tinha que falar."
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz7}
          audio={Audio9}
          textContent={
            <>
              <p>O Falatório de Stella do Patrocínio pôde ser registrado em áudio na década de 1980, adentrando a gira do tempo e compondo um legado imenso, em conteúdo e forma, para a sorte da cultura brasileira. Apesar de outros formatos que também compõem seu arquivo, como os prontuários médicos e o relatório elaborado por Mônica Ribeiro, serem fundamentais para esta trajetória textual, há uma singularidade inerente ao suporte em áudio, que é também a singularidade de cada ser humano: a voz.</p>
              <p>Stella afirmava gostar de gravação. Embora a modalidade do registro não possa ser considerada completamente ética ou imediada – afinal de contas, é marcada por interlocuções entre sujeitos com posições diferentes na hierarquia institucional –, é a partir dele que podemos ouvir uma voz que narra a si e a própria prática da palavra. Ouvir o falatório, portanto, se torna fundamental não só para que possamos nos aproximas dos temas, da estética e das autonomeações de Stella do Patrocínio, mas também dos seus silêncios, das suas recusas a falar ou cantar, do contexto das suas escolhas. Acredito que o trecho destacado pelo lambe-lambe reverbera um tanto disso: a lembrança de que é preciso respeitar as falas, mas também as lacunas, as opacidades, os encerramentos e o desejo de calar.</p>
            </>
          }
          onOpenAudioModal={() => handleOpenAudioModal(AudioDesc7)}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_07")}
          audioDescription={AudioDesc7}
          curatorText="Texto curatorial por Sara Ramos"
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Eight */}
      <Element name="eight">
        <PageSection
          id="eight"
          title="Não sei como se faz justiça. E sou advogada de defesa e salva-vida. [...] Eu tenho que enfrentar a violência, a brutalidade, a grosseria... e ir à luta, pelo pão de cada dia."
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz8}
          audio={Audio7}
          textContent={
            <>
              <p>Presente no CD2 / 02, este trecho do falatório pode ser interpretado de múltiplas maneiras. Quando adentramos o contexto imediatamente anterior a ele, ouvimos Stella mencionar que está no reino dos bichos e dos animais; que ela é um dinossauro; e que dinossauro nada faz. Depois de certo silêncio, interrompido apenas por vozes distantes, Stella afirma: "Eu sou muito medrosa, cínica, covarde, sonsa e injusta." Nelly Gutmacher, sua interlocutora, questiona o porquê; Stella então afirma não saber como se faz justiça.</p>
              
              <p>Ao escutar estes recortes do Falatório, o que se destaca ao meu ouvido pode ser descrito como certo conflito – vivido por Stella e provavelmente por muitas de suas companheiras –  entre o impulso de liberdade, ou o ímpeto pela criação de rotas de fuga, e a sensação de impotência que recai sobre aqueles que, desumanizados e bestializados, estão sujeitos a uma espécie de subvida.</p>
              
              <p>As possíveis interpretações são inexoravelmente catapultadas por um refinado senso rítmico, modulações vocálicas, rimas e aliterações – efeitos estéticos que fazem com que suas palavras permaneçam rondando nossos ouvidos. O trecho destacado inspirou a música composta por Linn da Quebrada chamada "medrosa - ode à Stella do Patrocínio".</p>
            </>
          }
          onOpenAudioModal={() => handleOpenAudioModal(AudioDesc8)}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_08")}
          audioDescription={AudioDesc8}
          curatorText="Texto curatorial por Sara Ramos"
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Nine */}
      <Element name="nine">
        <PageSection
          id="nine"
          title="A realidade é essa folha esse banco essa terra essa árvore, é esse prédio de dois andares essas roupas estendidas na muralha."
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz2}
          audio={Audio3}
          textContent={
            <>
              <p>No fim do arquivo CD2 / 02, Carla Guagliardi pergunta a Stella do Patrocínio se ela sonha:</p>

              <p className="dialogue"><blockquote>
                - Sonho, quando tô dormindo. Acordada não sonho não, tô na realidade<br/>
                - Você lembra?<br/>
                - Num lembro nada que se passa, nada de nenhum sonho que eu sonho. A realidade é essa folha esse banco essa terra essa árvore, é esse prédio de dois andares essas roupas estendidas na muralha.
                </blockquote></p> 

              <p>Esculpindo uma dicotomia, Stella parece querer afastar qualquer ideia de sonho do seu cotidiano no manicômio. Descrita a partir dos elementos no espaço, não à toa, essa realidade que a circunda não deixa espaço o sonhar, nem mesmo para a memória dos que nascem no inconsciente.</p>
              
              <p>Quando o escuto, sinto que o que há de mais estarrecedor neste recorte é a maneira como Stella combina os elementos banais e corriqueiros – seja uma folha, um prédio ou uma árvore – numa sonoridade rítmica graciosa e que embala os sentidos, mas que ao mesmo tempo – e essa é a sua força – está ali para comunicar toda a brutalidade, a dureza de um espaço/tempo.</p>
              
              <p>Aliás, penso que essa é uma das grandes particularidades do Falatório, como um todo: a sua capacidade de impressionar, embaralhar os sentidos e afetar seu ouvinte/leitor por meio de um estilo único – resultado de interações, como esta, entre sentido e forma.</p>
            </>
          }
          onOpenAudioModal={() => handleOpenAudioModal(AudioDesc9)}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_09")}
          audioDescription={AudioDesc9}
          curatorText="Texto curatorial por Sara Ramos"
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>

      {/* Página Ten */}
      <Element name="ten">
        <PageSection
          id="ten"
          title="Eu tenho vontade de ganhar dinheiro. Mas não tenho vontade de produzir nunca."
          description="Este é um recorte do Falatório de Stella do Patrocínio, mulher negra e carioca que, através da palavra oral, criou um estilo estético-político e artístico singular."
          image={Cartaz3}
          audio={Audio2}
          textContent={
            <><p>
              Quando escuto ou leio este recorte do arquivo CD1 / 01, penso que precisamos ter sempre em mente o fato de que a internação de Stella do Patrocínio não foi um caso isolado, mas parte de um projeto de nação com ideais eugenistas e higienistas, além de inserida em um contexto de forte correlação ideológica entre trabalho/produção e a ideia de normalidade. Esse cenário, aliado aos racismos estruturais e à patologização desenfreada, impulsionava a "limpeza" das ruas e das cidades, alvejando sempre os corpos considerados improdutivos, loucos, vadios, ociosos e dissidentes. Em contrapartida, as cosmopercepções indígenas e afrobrasileiras sempre recusaram as lógicas que buscam aprisionar a vida a um sentido exclusivamente produtivista e utilitário. O falatório de Stella, que compreende muito bem o contexto e as motivações raciais de sua internação, também corre na contramão dessas concepções coloniais e predatórias, sobretudo quando celebra a festa, o direito à cidade, a vadiagem, quando reitera seu gosto por "comer, beber e fumar" ou quando cita suas andanças e viagens pelas inúmeras ruas do Rio de Janeiro. Estas, aliás, como nos lembra Luiz Antonio Simas, são o que alimentam a vitalidade cultural carioca: são "verdadeiras bibliotecas." 
          </p>
          </>
          }
          onOpenAudioModal={() => handleOpenAudioModal(AudioDesc10)}
          onOpenLibrasModal={() => handleOpenLibrasModal("VIDEO_ID_10")}
          audioDescription={AudioDesc10}
          curatorText="Texto curatorial por Sara Ramos"
        >
          <div className="diagonal-divider diagonal-divider-top"></div>
          <div className="diagonal-divider diagonal-divider-bottom"></div>
        </PageSection>
      </Element>
    </div>
  );
}

// Componente reutilizável para as páginas
function PageSection({ 
  id, 
  title, 
  description,
  image,
  audio,
  secondAudio,
  textContent,
  poem,
  curatorText,
  audioDescription,
  librasVideoId,
  footnotes,
  children, 
  onOpenAudioModal, 
  onOpenLibrasModal 
}) {
  const [audioError, setAudioError] = useState(false);
  const [secondAudioError, setSecondAudioError] = useState(false);

  const handleAudioError = (isSecondAudio = false) => {
    console.log('Error loading audio:', isSecondAudio ? secondAudio : audio);
    if (isSecondAudio) {
      setSecondAudioError(true);
    } else {
      setAudioError(true);
    }
  };

  return (
    <div className="page-section" id={id}>
      {children}
      <div className="section-content">
        <div className="title-container">
          <h1>
            {Array.isArray(title) ? (
              title.map((line, index) => (
                <div key={index}>{line}</div>
              ))
            ) : (
              title.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))
            )}
          </h1>
          <div className="title-description">
            {description}
          </div>
        </div>
        <div className="content-flex">
          <div className="left-content">
            <img src={image} alt={`Cartaz ${id}`} className="cartaz-image" />
            {audio && !audioError && (
              <div className="audio-section">
                <h3 className="section-title">Ouça o trecho</h3>
                <audio 
                  controls 
                  onError={() => handleAudioError(false)}
                  onLoadStart={() => setAudioError(false)}
                >
                  <source 
                    src={audio} 
                    type="audio/mpeg" 
                    onError={() => handleAudioError(false)}
                  />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>
            )}
            {secondAudio && !secondAudioError && (
              <div className="audio-section">
                <h3 className="section-title">Ouça o segundo trecho</h3>
                <audio 
                  controls 
                  onError={() => handleAudioError(true)}
                  onLoadStart={() => setSecondAudioError(false)}
                >
                  <source 
                    src={secondAudio} 
                    type="audio/mpeg" 
                    onError={() => handleAudioError(true)}
                  />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>
            )}
            <div className="accessibility-section">
              <h3 className="section-title">Acessibilidade</h3>
              <div className="accessibility-buttons">
                <button 
                  className="accessibility-btn" 
                  onClick={onOpenAudioModal}
                  disabled={audioDescription === null}
                >
                  <span className="icon">🔊</span>
                  {audioDescription === null ? 'Audiodescrição indisponível' : 'Audiodescrição'}
                </button>
                <button className="accessibility-btn" onClick={onOpenLibrasModal}>
                  <span className="icon">👋</span>
                  Libras
                </button>
              </div>
            </div>
            <h3 className="section-title">Baixe o cartaz</h3>
            <a 
              href="https://drive.google.com/file/d/1gNhbilOgsqyXFutztRBCtNTgZKbLb4OI/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="accessibility-btn"
            >
              Baixe Aqui
            </a>
          </div>
          <div className="text-content-section">
            {textContent}
            {poem && (
              <div className="poem">
                {Array.isArray(poem) ? (
                  poem.map((verse, index) => (
                    <div key={index} className="verse">{verse}</div>
                  ))
                ) : (
                  <div className="verse">{poem}</div>
                )}
              </div>
            )}
            {footnotes && (
              <div className="footnotes">
                {Array.isArray(footnotes) ? (
                  footnotes.map((note, index) => (
                    <p key={index} className="footnote">
                      {index + 1}. <em>{note}</em>
                    </p>
                  ))
                ) : (
                  <p className="footnote"><em>{footnotes}</em></p>
                )}
              </div>
            )}
            {curatorText && <p className="curator-text">{curatorText}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
