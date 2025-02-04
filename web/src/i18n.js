import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        footer_text: "Feito com",
        by_dev: "por DevDuque",

        my_journey: "Minha Jornada",
        my_creations: "Minha Criações",
        my_way: "Meu Jeito de Trabalhar",
        btn_work: "Vamos Trabalhar Juntos",
      },
    },
    en: {
      translation: {
        footer_text: "Made with",
        by_dev: "by DevDuque",

        my_journey: "My Journey",
        my_creations: "My Creations",
        my_way: "My Way to Work",
        btn_work: "Let's work together",
      },
    },
    zh: {
      translation: {
        footer_text: "Made with",
        by_dev: "by DevDuque",

        my_journey: "My Journey",
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
