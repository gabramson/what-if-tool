import React from 'react';
import { connect } from 'react-redux'
import { getGames } from '../store/tournament/reducer';
import GameContainer from './gameContainer';

const mapStateToProps = (state) => {
  return {
    games: getGames(state),
  }
}

const Games = ({games}) => {
  const gamesIndices = Array.from({length: games}, (el, index) => index+1);
  const gamesList = gamesIndices.map((i) =>
     <div key={i}><GameContainer gameId={i} /><br/></div>
  );
  return (
    <div className='Games'>
      {gamesList}
    </div>
  )
}
 
const GamesContainer = connect(mapStateToProps)(Games)

export default GamesContainer