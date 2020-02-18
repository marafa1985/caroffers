import React from 'react';
import './App.scss';
import LOGO from './img/logo.svg'
import SearchPanel from './components/SearchPanel/SearchPanel';

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={LOGO} alt='Sixt' /> <span>Sightseeing</span>
      </div>
      <SearchPanel />
    </div>
  );
}

export default App;
