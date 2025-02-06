import { useTranslation } from "react-i18next";

import Logo from "../assets/icons/logo.svg";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="bg-background-components flex items-center justify-between p-4 border-b-4 border-stroke w-full mb-auto">
      <a href="/" className="w-fit cursor-pointer">
        <img src={Logo} alt="Logo" width={80} height={72} />
      </a>

      <div className="flex flex-1 justify-center gap-24">
        <a
          href="/journey"
          className="text-main-text font-medium text-xl hover:border-b-4 border-primary cursor-pointer"
        >
          {t("my_journey")}
        </a>

        <a
          href="/projects"
          className="text-main-text font-medium text-xl hover:border-b-4 border-primary cursor-pointer"
        >
          {t("my_creations")}
        </a>

        <a
          href="/my-way"
          className="text-main-text font-medium text-xl hover:border-b-4 border-primary cursor-pointer"
        >
          {t("my_way")}
        </a>
      </div>

      <button className="border-primary border-2 font-medium text-xl rounded-3xl py-2 px-4 cursor-pointer hover:bg-primary hover:border-stroke hover:text-stroke transition-colors">
        {t("btn_work")}
      </button>
    </div>
  );
}

export default Header;
