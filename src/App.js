import React from "react";
import { connect } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import GamesContainer from "./containers/gamesContainer";
import WinnerContainer from "./containers/winnerContainer";
import SimulationsContainer from "./containers/simulationsContainer";
import { GetRegion } from "./store/regions/reducer";
import "./App.css";

const mapStateToProps = (state) => {
  let names = [];
  for (let i=1; i<=4; i++) {
      names[i-1] = GetRegion(state, i)
  }
  return {names};
};

const myApp = (props) => {
  let names = props.names;
  return (
  <div className="App">
    <Tabs defaultActiveKey="region1">
      <Tab eventKey="region1" title={names[0]}>
        <GamesContainer regionId="1" />
        <WinnerContainer type="RegionWinner" gameId="57" />
      </Tab>
      <Tab eventKey="region2" title={names[1]}>
        <GamesContainer regionId="2" />
        <WinnerContainer type="RegionWinner" gameId="58" />
      </Tab>
      <Tab eventKey="region3" title={names[2]}>
        <GamesContainer regionId="3" />
        <WinnerContainer type="RegionWinner" gameId="59" />
      </Tab>
      <Tab eventKey="region4" title={names[3]}>
        <GamesContainer regionId="4" />
        <WinnerContainer type="RegionWinner" gameId="60" />
      </Tab>
      <Tab eventKey="final_four" title="Final Four">
        <GamesContainer regionId="5" />
        <WinnerContainer type="OverallWinner" gameId="63" />
      </Tab>
      <Tab eventKey="simulations" title="Simulations">
        <SimulationsContainer />
      </Tab>
    </Tabs>
  </div>
  )
};

const App = connect(mapStateToProps)(myApp);
export default App;
