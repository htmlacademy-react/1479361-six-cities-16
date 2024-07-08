import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../Main/Main-page';
import { NumberOfOffers } from '../..';
import LoginPage from '../Login/Login-page';
import FavorietsPage from '../Favoriets/Favoriets-page';
import OfferPage from '../Offer/Offer-page';
import NotFounPage from '../NotFounPage/Not-found-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../privateRoute/private-route';

function App(props: NumberOfOffers) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage {...props}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favoriets}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavorietsPage/>
            </PrivateRoute>
          }
        />
        {/* offer передается с id погляди завтра че как */}
        <Route
          path={AppRoute.Offer}
          element={<OfferPage/>}
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
