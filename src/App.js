import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import GamesContainer from './containers/gamesContainer';
import WinnerContainer from './containers/winnerContainer';
import SimulationsContainer from './containers/simulationsContainer';
import './App.css';

const App = () => (
  <div className="App">
  <Tabs defaultActiveKey="games">
    <Tab eventKey="games" title="Games">
      <GamesContainer />
      <WinnerContainer  />
    </Tab>
    <Tab eventKey="simulations" title="Simulations">
      <SimulationsContainer />
    </Tab>
  </Tabs>
  </div>
);

export default App;