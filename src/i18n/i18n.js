import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationPL from "./pl/translation.json";
import translationEN from "./en/translation.json";

const resources = {
  pl: { translation: translationPL },
  en: { translation: translationEN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl", 
  fallbackLng: "pl",
  interpolation: { escapeValue: false },
});

export default i18n;