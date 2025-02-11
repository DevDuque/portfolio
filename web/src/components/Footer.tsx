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
    <div className="bg-background-components w-full p-4 border-t-4 border-stroke-secondary mt-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          width={80}
          height={72}
          className="cursor-pointer transition-transform hover:-translate-y-2"
        />

        {/* Centered Text */}
        <div className="flex flex-1 justify-center items-center gap-2">
          <p className="text-xl">{t("footer_text")}</p>

          <img
            src={Heart}
            alt="Heart"
            width={32}
            height={28}
            className="transition-transform duration-75 hover:animate-spin"
          />

          <p className="text-xl">{t("by_dev")}</p>
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/devduque"
            target="_blank"
            className="w-fit cursor-pointer"
          >
            <img
              src={GitHub}
              alt="GitHub"
              width={48}
              height={48}
              className="cursor-pointer hover:brightness-0 hover:grayscale transition-transform hover:-translate-y-2"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/davihgduque/"
            target="_blank"
            className="w-fit cursor-pointer"
          >
            <img
              src={Linkedin}
              alt="Linkedin"
              width={48}
              height={48}
              className="cursor-pointer hover:brightness-0 hover:grayscale transition-transform hover:-translate-y-2"
            />
          </a>

          <a
            href="https://www.instagram.com/devduque/"
            target="_blank"
            className="w-fit cursor-pointer"
          >
            <img
              src={Instagram}
              alt="Instagram"
              width={48}
              height={48}
              className="cursor-pointer hover:brightness-0 hover:grayscale transition-transform hover:-translate-y-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
