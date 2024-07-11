import { Offers } from '../../types';
import Header from '../Header/Header';
import FavotiteLocationsItems from './FavotiteLocationsItems';

const FavorietsPage = ({offers}: {offers: Offers[]}) => {
  const sortedByCityes = offers.reduce((acc: {[key:string]: Offers[]}, obj: Offers) => {
    const cityName = obj.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }

    acc[cityName].push(obj);

    return acc;
  }, {});

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.entries(sortedByCityes).map(([cityName, offer]) =>(
                  <FavotiteLocationsItems
                    key={Math.random()}
                    city={cityName}
                    offers={offer}
                  />)
                )
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

export default FavorietsPage;
