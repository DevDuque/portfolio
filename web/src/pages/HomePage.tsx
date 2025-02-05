// Icons
import Download from "../assets/icons/download.svg";
import GitHub from "../assets/icons/GitHub_Button.svg";
import Linkedin from "../assets/icons/Linkedin_Button.svg";
import Instagram from "../assets/icons/Instagram_Button.svg";

import Photo from "../assets/icons/photo.png";

// Cards Images
import EasyMarketLogo from "../assets/icons/easymarket.png";
import EasyMarketImage from "../assets/images/easydemo.png";

import WTBLogo from "../assets/icons/wtb.png";
import WTBImage from "../assets/images/wtbdemo.png";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

import LanguageSelector from "../components/LanguageSelector";

import Card from "../components/Card";

import { useTranslation } from "react-i18next";

// Routing
import { Link } from "react-router-dom";

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-grow flex flex-col items-center gap-4">
          <div className="flex self-end p-4">
            <LanguageSelector />
          </div>

          <div className="flex items-center justify-between px-8">
            {/* Left Content */}
            <div className="flex flex-col gap-4 w-1/2">
              <label className="text-xl text-primary font-bold">
                Desenvolvedor Full-Stack-Junior
              </label>

              <h2 className="text-4xl font-bold">
                Seja bem-vindo! <br /> Eu sou Davih G. Duque
              </h2>

              <p className="text-xl">
                Estou em busca de oportunidades para aprender, crescer e
                transformar ideias em soluções incríveis.
              </p>

              {/* Buttons Row */}
              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center gap-4 border-2 border-primary px-4 py-2 rounded-3xl">
                  Baixar currículo
                  <img src={Download} alt="" width={32} height={32} />
                </button>

                <div className="flex gap-4">
                  <button>
                    <img src={GitHub} alt="GitHub" width={48} height={48} />
                  </button>
                  <button>
                    <img src={Linkedin} alt="LinkedIn" width={48} height={48} />
                  </button>
                  <button>
                    <img
                      src={Instagram}
                      alt="Instagram"
                      width={48}
                      height={48}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <img src={Photo} alt="Profile" className="w-1/3.5" />
          </div>

          <h2 className="text-2xl font-bold"> {t("main_projects")} </h2>
        </div>

        <div className="flex flex-wrap justify-center">
          <Card
            title="EasyMarket"
            logo={EasyMarketLogo}
            image={EasyMarketImage}
            description={
              <div className="h-full">
                {/* {t("easy_description")} */}
                Minha atuação no EasyMarket foi focada no aprimoramento do
                design e na experiência do usuário (UI e UX). <br /> Projeto
                desenvolvido pelos meus colegas do COLTEC.
                <br /> <br />
                O EasyMarket tem como objetivo tornar as compras do dia a dia
                mais práticas e organizadas.
                <br />O aplicativo permite aos usuários criar listas de compras,
                visualizar supermercados próximos, acompanhar seu histórico de
                gastos e até consultar uma API para pesquisar alimentos e
                visualizar as calorias de cada item com base em uma quantidade
                específica de gramas, ajudando a tomar decisões mais informadas
                sobre a alimentação.
              </div>
            }
            link="https://easymarket.com"
            type="design"
            tech={["figma"]}
          />

          <Card
            title="Watching the Beat"
            logo={WTBLogo}
            image={WTBImage}
            description={
              <div className="h-full">
                {/* {t("wtb_description")} */}
                No projeto WTB, atuei de forma completa, desenvolvendo tanto a
                UI e UX quanto a própria aplicação. Além disso, tomei a
                iniciativa como líder, organizando e distribuindo as demandas
                entre meus colegas.
                <br /> O WTB é um aplicativo que une cinema e música, criando
                uma experiência imersiva onde imagem e som se complementam. A
                proposta é explorar como a música amplifica as emoções nos
                filmes, proporcionando uma nova forma de apreciá-los.
                <br /> <br />
                Inicialmente, planejamos usar a API do TMDB, mas devido a
                dificuldades técnicas, optamos por criar uma lista de filmes
                armazenada na memória, salva no banco de dados e associada ao
                usuário. <br />O aplicativo exibe os filmes em uma lista
                simples, permitindo que o usuário logado adicione ao seus
                favoritos, garantindo uma experiência personalizada e alinhada à
                proposta original: oferecer a perfeita harmonia entre cinema e
                música.
              </div>
            }
            link="https://easymarket.com"
            type="android"
            tech={["xml", "java"]}
          />
        </div>

        <div className="flex justify-center">
          <Link to="/projects">
            <button
              className="text-xl font-bold py-2 px-8 border-2 border-primary rounded-3xl m-4
          "
            >
              Ver Mais
            </button>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
