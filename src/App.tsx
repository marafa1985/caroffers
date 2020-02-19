import React, { useState } from 'react';
import './App.scss';
import LOGO from './img/logo.svg'
import SearchPanel from './components/SearchPanel/SearchPanel';
import Offers from './components/Offers/Offers';

const App: React.FC = () => {
  const [offers, setOffers] = useState()
  return (
    <div className="App">
      <div className='logo'>
        <img src={LOGO} alt='Sixt' /> <span>Sightseeing</span>
      </div>
      <div className='container'>
        <SearchPanel setOffers={setOffers} />
        {offers && <Offers offers={offers} />}
      </div>
    </div>
  );
}

export default App;
