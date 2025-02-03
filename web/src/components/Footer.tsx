import { useTranslation } from "react-i18next";

// Icons
import Logo from "../assets/icons/logo.svg";
import Heart from "../assets/icons/heart.svg";
import GitHub from "../assets/icons/GitHub_Button.svg";
import Linkedin from "../assets/icons/Linkedin_Button.svg";
import Instagram from "../assets/icons/Instagram_Button.svg";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-background-components flex items-center justify-between p-4 border-b-4 border-stroke">
      <img src={Logo} alt="Logo" width={80} height={72} />

      <div className="flex flex-1 justify-center items-center gap-2">
        {/* Texto traduzido */}
        <p className="text-xl">{t("footer_text")}</p>

        <img
          src={Heart}
          alt=""
          width={32}
          height={28}
          className="transition-transform duration hover:animate-spin"
        />

        {/* Texto fixo */}
        <p className="text-xl">{t("by_dev")}</p>
      </div>

      <div className="flex justify-between gap-4">
        <img src={GitHub} alt={t("github")} width={48} height={48} />
        <img src={Linkedin} alt={t("linkedin")} width={48} height={48} />
        <img src={Instagram} alt={t("instagram")} width={48} height={48} />
      </div>
    </div>
  );
}

export default Footer;
