import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../Main/Main-page';
import LoginPage from '../Login/LoginPage';
// import FavorietsPage from '../Favoriets/Favoriets-page';
// import OfferPage from '../Offer/Offer-page';
import NotFounPage from '../NotFounPage/NotFoundPage';
import { AppRoute} from '../../const';
import PrivateRoute from '../privateRoute/PrivateRoute';
import { Offers } from '../../types';
import OfferPage from '../Offer/OfferPage';
import { useState } from 'react';
import FavorietsPage from '../Favoriets/FavorietsPage';
// import PlaceCard from '../PlaceCard/PlaceCard';

function App({offers}: {offers: Offers[]}) {
  const [id, setId] = useState('-1');


  let offer: Offers | undefined;
  offers.forEach((currentOffer: Offers) => {
    if(currentOffer.id === id){
      offer = currentOffer;
    }
  });

  // const offer: Offers | undefined = offers.find((currentOffer: Offers) => currentOffer.id === id);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute
              requareAuth={false}
              redirectTo={AppRoute.Root}
            >
              <LoginPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favoriets}
          element={
            <PrivateRoute
              requareAuth
              redirectTo={AppRoute.Login}
            >
              <FavorietsPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage
              offer={offer}
              setIdNumber={setId}
            />
          }
        />
        <Route
          path='*'
          element={<NotFounPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
