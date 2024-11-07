import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { registerLocale } from "react-datepicker";
import {
  ru as RU,
  enUS as EN,
  it as IT,
  es as ES,
  de as DE,
  fr as FR,
} from "date-fns/locale";
import en from "./en";
import ru from "./ru";
import it from "./it";
import es from "./es";
import de from "./de";
import fr from "./fr";
import { languageLocalizationList } from "@config/constant";

const { shortName } = languageLocalizationList.en;

i18n
  .use(initReactI18next)
  .use(
    new LanguageDetector(null, {
      lookupLocalStorage: "lang",
      order: ["localStorage"],
    })
  )
  .init({
    fallbackLng: shortName,
    debug: false,
    resources: {
      en,
      ru,
      it,
      es,
      de,
      fr,
    },
    interpolation: {
      escapeValue: false,
    },
  });

const getNameSpaces = () => {
  return Object.keys(i18n.options.resources?.en || {});
};

const nameSpaces = getNameSpaces();

registerLocale("ru", RU);
registerLocale("enUS", EN);
registerLocale("it", IT);
registerLocale("es", ES);
registerLocale("de", DE);
registerLocale("frFR", FR);

export { i18n, nameSpaces };
