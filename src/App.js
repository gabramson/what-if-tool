import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tournament from './store/tournament/reducer';
import Game from './components/game'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Game gameId={1} line1={'Villanova'} line2={'Kentucky'} />,
          document.getElementById('root')
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state); // state
  console.log(arguments[1]); // undefined
}

export default connect()(tournament);