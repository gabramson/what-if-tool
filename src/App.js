import React from 'react';
import GamesContainer from './containers/gamesContainer';
import WinnerContainer from './containers/winnerContainer';
import SimulationsContainer from './containers/simulationsContainer';
import './App.css';

const App = () => (
  <div className="App">
    <GamesContainer />
    <WinnerContainer  />
    <SimulationsContainer />
  </div>
);

export default App;