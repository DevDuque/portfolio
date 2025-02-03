import { useState } from "react";

import { useTranslation } from "react-i18next";

// Icons
import FaDown from "../assets/icons/fadown.svg";
import LanguageImage from "../assets/icons/language_tag.svg";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Controla a visibilidade do dropdown

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen); // Alterna a visibilidade do dropdown
  };

  const handleChangeLanguage = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // Fecha o dropdown após selecionar o idioma
  };

  return (
    <div className="relative inline-block">
      {/* O botão de idioma com o triângulo (seta) */}
      <button
        onClick={handleToggleDropdown}
        className="flex items-center gap-2 px-4 py-2 border-primary rounded-lg text-lg focus:outline-none"
      >
        <img src={LanguageImage} alt="Language Icon" width={32} height={32} />

        {i18n.language === "pt" ? "Português" : "English"}
        <img
          src={FaDown}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown com as opções de idioma */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-300">
          <ul>
            <li
              onClick={() => handleChangeLanguage("pt")}
              className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-200"
            >
              Português
            </li>
            <li
              onClick={() => handleChangeLanguage("en")}
              className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-200"
            >
              English
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
