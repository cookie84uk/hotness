export const i18nCodeString = `
import i18next from 'i18next';

i18next.init({
  lng: 'en', 
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
});

document.getElementById('output').innerHTML = i18next.t('key');
`;
