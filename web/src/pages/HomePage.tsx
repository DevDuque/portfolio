// Icons
import Download from "../assets/icons/download.svg";
import GitHub from "../assets/icons/GitHub_Button.svg";
import Linkedin from "../assets/icons/Linkedin_Button.svg";
import Instagram from "../assets/icons/Instagram_Button.svg";

import ProfilePhoto from "../assets/icons/photo.png";

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

import { Trans, useTranslation } from "react-i18next";

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
                {t("dev")}
              </label>

              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-bold">{t("welcome")}</h2>
                <h2 className="text-4xl font-bold">{t("iam")}</h2>
              </div>

              <p className="text-xl">{t("description")}</p>

              {/* Buttons Row */}
              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center gap-4 border-2 border-primary px-4 py-2 rounded-3xl">
                  {t("download")}
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
            <img src={ProfilePhoto} alt="Profile" className="w-1/3.5" />
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
                <Trans i18nKey="easy_description"></Trans>
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
                <Trans i18nKey="wtb_description"></Trans>
              </div>
            }
            link="https://wtb.com"
            type="android"
            tech={["xml", "java"]}
          />
        </div>

        <div className="flex justify-center">
          <Link to="/projects">
            <button
              className="text-xl font-bold py-2 px-8 border-2 border-primary rounded-3xl m-4 cursor-pointer hover:bg-primary hover:border-stroke hover:text-stroke transition-colors
          "
            >
              {t("see_more")}
            </button>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
