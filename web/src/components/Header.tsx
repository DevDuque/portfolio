import { useTranslation } from "react-i18next";

import Logo from "../assets/icons/logo.svg";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="bg-background-components flex items-center justify-between p-4 border-b-4 border-stroke">
      <img src={Logo} alt="Logo" width={80} height={72} />

      <div className="flex flex-1 justify-center gap-24">
        <a href="#" className="text-main-text hover:border-b-4 border-primary">
          {t("my_journey")}
        </a>

        <a href="#" className="text-main-text hover:border-b-4 border-primary">
          {t("my_creations")}
        </a>

        <a href="#" className="text-main-text hover:border-b-4 border-primary">
          {t("btn_work")}
        </a>
      </div>

      <button className="border-primary border-2 rounded-xl py-2 px-4">
        Vamos Trabalhar Juntos
      </button>
    </div>
  );
}

export default Header;
