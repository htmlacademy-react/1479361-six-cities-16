import { Link } from 'react-router-dom';
import './Not-found-page.css';

const NotFounPage = () => (
  <div className='not-found__wrapper'>
    <h1>NOT FOUND PAGE</h1>
    <Link to="/">Главная страница</Link>
  </div>
);

export default NotFounPage;
