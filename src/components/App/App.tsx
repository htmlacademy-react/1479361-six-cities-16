import MainPage from '../Main/Main-page';
import { NumberOfOffers } from '../..';

function App(props: NumberOfOffers) {
  return (
    <MainPage {...props}/>
  );
}

export default App;
