// Icons
import Download from "../assets/icons/download.svg";
import GitHub from "../assets/icons/GitHub_Button.svg";
import Linkedin from "../assets/icons/Linkedin_Button.svg";
import Instagram from "../assets/icons/Instagram_Button.svg";

import Photo from "../assets/icons/photo.png";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";
import Card from "../components/Card";

function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-grow flex flex-col items-center">
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

          <button
            className="text-xl py-2 px-8 border-2 border-primary rounded-3xl m-8
          "
          >
            Ver Mais
          </button>
        </div>

        <div className="flex flex-wrap justify-center">
          <Card />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
