import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Provider } from 'react-redux'
import generateStore from './redux/store';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <Main />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
