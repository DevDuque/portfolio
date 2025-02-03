import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        footer_text: "Feito com",
        by_dev: "por DevDuque",
        github: "GitHub",
        linkedin: "Linkedin",
        instagram: "Instagram",
      },
    },
    en: {
      translation: {
        footer_text: "Made with",
        by_dev: "by DevDuque",
        github: "GitHub",
        linkedin: "Linkedin",
        instagram: "Instagram",
      },
    },
  },
  lng: "pt", // idioma padrão
  fallbackLng: "pt", // idioma de fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
