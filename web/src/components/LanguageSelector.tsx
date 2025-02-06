import { useState } from "react";

import { useTranslation } from "react-i18next";

// Icons
import FaDown from "../assets/icons/fadown.svg";
import LanguageImage from "../assets/icons/language_tag.svg";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleToggleDropdown}
        className="flex items-center gap-2 border-primary rounded-lg text-xl font-medium focus:outline-none"
      >
        <img src={LanguageImage} alt="Language Icon" width={32} height={32} />

        {i18n.language === "pt"
          ? "Português"
          : i18n.language === "zh"
          ? "中文"
          : "English"}

        <img
          src={FaDown}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2  w-40 bg-background-components
         shadow-lg rounded-lg border-4 border-stroke"
        >
          <ul>
            <li
              onClick={() => handleChangeLanguage("en")}
              className="px-4 py-2 text-main-text font-medium text-xl cursor-pointer hover:bg-stroke transition-colors"
            >
              English
            </li>

            <li
              onClick={() => handleChangeLanguage("pt")}
              className="px-4 py-2 text-main-text font-medium text-xl cursor-pointer hover:bg-stroke transition-colors"
            >
              Português
            </li>
            <li
              onClick={() => handleChangeLanguage("zh")}
              className="px-4 py-2 text-main-text font-medium text-xl cursor-pointer hover:bg-stroke transition-colors"
            >
              中文
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
