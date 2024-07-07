import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

export type NumberOfOffers = {
  countOffers: number;
}

const numberOfOffers: NumberOfOffers = {
  countOffers: 6,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App {...numberOfOffers}/>
  </React.StrictMode>
);
