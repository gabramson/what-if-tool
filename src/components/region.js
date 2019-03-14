import React from 'react';
import {connect} from "react-redux";
import {GetRegion} from "../store/regions/reducer"
import Tab from 'react-bootstrap/Tab'
import GamesContainer from '../containers/gamesContainer';

const mapStateToProps = (state, ownProps) => {
    return {
      name: GetRegion(ownProps.regionId)
    };
  };
  
const RegionB = (props) => {
    return (
      <Tab eventKey="Region1" title="Region1">
        <GamesContainer regionId="1" />
      </Tab>
  
    );
};

const RegionA = connect(null, null)(RegionB);
export default RegionA;