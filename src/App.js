import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import GamesContainer from './containers/gamesContainer';
import WinnerContainer from './containers/winnerContainer';
import SimulationsContainer from './containers/simulationsContainer';
import './App.css';

const App = () => (
  <div className="App">
  <Tabs defaultActiveKey="region1">
    <Tab eventKey="region1" title="Region 1">
      <GamesContainer regionId="1" />
    </Tab>
    <Tab eventKey="region2" title="Region 2">
      <GamesContainer regionId="2" />
    </Tab>
    <Tab eventKey="region3" title="Region 3">
      <GamesContainer regionId="3" />
    </Tab>
    <Tab eventKey="region4" title="Region 4">
      <GamesContainer regionId="4" />
    </Tab>
    <Tab eventKey="final_four" title="Final Four">
      <GamesContainer regionId="5" />
      <WinnerContainer />
    </Tab>
    <Tab eventKey="simulations" title="Simulations">
      <SimulationsContainer />
    </Tab>
  </Tabs>
  </div>
);

export default App;