// Cards Images
import EasyMarketLogo from "../assets/icons/easymarket.png";
import EasyMarketImage from "../assets/images/easydemo.png";

import WTBLogo from "../assets/icons/wtb.png";
import WTBImage from "../assets/images/wtbdemo.png";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

import Filter from "../components/Filter";
import LanguageSelector from "../components/LanguageSelector";

import Card from "../components/Card";

import { Trans, useTranslation } from "react-i18next";

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-grow flex-col items-center gap-4">
          <div className="flex self-end p-5">
            <LanguageSelector />
          </div>

          <div className="flex flex-col items-center px-10 gap-2">
            <h1 className="text-3xl font-bold">{t("my_creations")}</h1>
            <p className="font-medium font-secondary">
              <Trans i18nKey="projects_desc" />
            </p>
          </div>

          <div className="flex justify-end w-full">
            <Filter />
          </div>

          <div className="flex flex-wrap justify-center w-full">
            <Card
              title="EasyMarket"
              logo={EasyMarketLogo}
              image={EasyMarketImage}
              description={
                <div className="h-full">
                  <Trans i18nKey="easy_description" />
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
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;
