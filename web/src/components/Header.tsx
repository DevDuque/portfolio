import { useTranslation } from "react-i18next";

import Logo from "../assets/icons/logo.svg";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="bg-background-components flex items-center justify-between p-4 border-b-4 border-stroke w-full mb-auto">
      <img src={Logo} alt="Logo" width={80} height={72} />

      <div className="flex flex-1 justify-center gap-24">
        <a
          href="/journey"
          className="text-main-text hover:border-b-4 border-primary"
        >
          {t("my_journey")}
        </a>

        <a
          href="/projects"
          className="text-main-text hover:border-b-4 border-primary"
        >
          {t("my_creations")}
        </a>

        <a
          href="/my-way"
          className="text-main-text hover:border-b-4 border-primary"
        >
          {t("my_way")}
        </a>
      </div>

      <button className="border-primary border-2 rounded-3xl py-2 px-4">
        {t("btn_work")}
      </button>
    </div>
  );
}

export default Header;
