import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pt } from "./locales/pt";
import { en } from "./locales/en";
import { zh } from "./locales/zh";

i18n.use(initReactI18next).init({
  resources: {
    pt: pt,
    en: en,
    zh: zh,
  },
  lng: "en", // default language
  fallbackLng: "pt", // fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
