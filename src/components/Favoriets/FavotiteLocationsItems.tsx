import { Offers } from '../../types';
import FavoriteCard from './FavoriteCard';

const FavotiteLocationsItems = ({city, offers}: {city:string; offers: Offers[]}) => {
  // eslint-disable-next-line no-console
  console.log();
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => <FavoriteCard key={offer.id} offer={offer}/>)
        }
      </div>
    </li>
  );
};

export default FavotiteLocationsItems;
