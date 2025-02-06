// Cards Images
import EasyMarketLogo from "../assets/icons/easymarket.png";
import EasyMarketImage from "../assets/images/easydemo.png";

import WTBLogo from "../assets/icons/wtb.png";
import WTBImage from "../assets/images/wtbdemo.png";

import HabitLogo from "../assets/icons/habitjourney.png";
import HabitImage from "../assets/images/habitjourneydemo.png";

import XPulseLogo from "../assets/icons/XPulseLogo.png";
import XPulseImage from "../assets/images/xpulsedemo.png";

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

          <div className="flex flex-col items-center px-20 gap-2">
            <h1 className="text-3xl font-bold">{t("my_creations")}</h1>
            <p className="font-medium font-secondary leading-4">
              <Trans i18nKey="projects_desc" />
            </p>
          </div>

          <div className="flex justify-end w-full">
            <Filter />
          </div>

          <div className="flex flex-wrap justify-center w-full gap-10 mb-10">
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

            <Card
              title="Habit Journey"
              logo={HabitLogo}
              image={HabitImage}
              description={
                <div className="h-full">
                  <Trans i18nKey="habit_description"></Trans>
                </div>
              }
              link="https://habitjourney.com"
              type="ios"
              tech={["swift", "sqlite", "firebase"]}
            />

            <Card
              title="XPulse"
              logo={XPulseLogo}
              image={XPulseImage}
              description={
                <div className="h-full">
                  <Trans i18nKey="xpulse_description"></Trans>
                </div>
              }
              link="https://wtb.com"
              type="ios"
              tech={["swift", "sqlite", "firebase"]}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;
