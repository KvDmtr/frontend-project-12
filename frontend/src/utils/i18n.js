import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from '../locales/resources.js';

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    resources,
  })