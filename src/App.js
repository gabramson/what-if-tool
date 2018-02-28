import React from 'react';
import GamesContainer from './containers/gamesContainer';
import WinnerContainer from './containers/winnerContainer';
import './App.css';

const App = () => (
  <div className="App">
    <GamesContainer />
    <WinnerContainer  />
  </div>
);

export default App;