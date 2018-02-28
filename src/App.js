import React from 'react';
import GameContainer from './containers/gameContainer';
import WinnerContainer from './containers/winnerContainer';
import './App.css';

const App = () => (
  <div className="App">
    <GameContainer gameId={1} />
    <br/>
    <WinnerContainer  />
  </div>
);

export default App;