// import React from 'react';
import { connect } from 'react-redux'
import * as tournamentSelectors from '../store/tournament/reducer';
import Game from '../components/game';

const mapStateToProps = (state, ownProps) => {
    return {
      gameId: ownProps.gameId,
      lines: tournamentSelectors.getGameLines(state, ownProps)
    }
  }
   
const GameContainer = connect(
    mapStateToProps
)(Game)

export default GameContainer