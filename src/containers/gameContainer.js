// import React from 'react';
import { connect } from 'react-redux'
import * as tournamentSelectors from '../store/tournament/reducer';
import {advanceTeam} from '../store/tournament/actions';
import Game from '../components/game';

const mapStateToProps = (state, ownProps) => {
  return {
    gameId: ownProps.gameId,
    lines: tournamentSelectors.getGameLines(state, ownProps)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLineClick: (gameId, line) => {
      dispatch(advanceTeam(gameId, line));
    }
  }
}
 
const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer