import React, { useState } from 'react';
import './App.scss';
import LOGO from './img/logo.svg'
import SearchPanel from './components/SearchPanel/SearchPanel';
import Offers from './components/Offers/Offers';
import { Offer, ErrorMessage } from './model/offers';
import { OfferData, getOfferAPI } from './model/offersHttp';
import { CircularProgress } from '@material-ui/core';

const App: React.FC = () => {
  const [offers, setOffers] = useState<Offer[] | ErrorMessage | undefined>()
  const [loading, setLoading] = useState(false)
  const getOffers = async (offerData: OfferData) => {

    setOffers(undefined)
    setLoading(true)
    try {
      const offerList: Offer[] | ErrorMessage = await getOfferAPI<Offer[] | ErrorMessage>(offerData)
      setOffers(offerList)
    } catch (error) {
      setOffers(undefined)
    } finally {
      setLoading(false)
    }

  }
  return (
    <div className="App">
      <div className='logo'>
        <img src={LOGO} alt='Sixt' /> <span>Sightseeing</span>
      </div>
      <div className='container'>
        <SearchPanel getOffers={getOffers} />
        {loading && <CircularProgress style={{ color: '#ff7d19', margin: 50 }} />}
        {offers instanceof Array && <Offers offers={offers} />}
        {offers instanceof Object &&
          <p className='error'>
            {(offers as ErrorMessage).errorMessage}
          </p>}
      </div>
    </div>
  );
}

export default App;
