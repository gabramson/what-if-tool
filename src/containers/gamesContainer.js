import React from 'react';
import { connect } from 'react-redux'
import { getGames } from '../store/tournament/reducer';
import GameContainer from './gameContainer';

const mapStateToProps = (state) => {
  return {
    games: getGames(state),
  }
}

const getRoundClass = (rounds, gamesCount, game) => {
  const round = rounds - Math.floor(Math.log2(gamesCount + 1 - game));
  return `Round${round}`;
}

const Games = ({games}) => {
  const gamesIndices = Array.from({length: games}, (el, index) => index+1);
  const gamesCount = gamesIndices.length;
  const rounds = Math.log2(gamesIndices.length+1);
  console.log(`${gamesIndices.length}, ${rounds}`);
  const gamesList = gamesIndices.map((i) =>
    <div className={getRoundClass(rounds, gamesCount, i)} key={i}><GameContainer gameId={i} /><br/></div>
  );
  return (
    <div className='Games'>
      {gamesList}
    </div>
  )
}
 
const GamesContainer = connect(mapStateToProps)(Games)

export default GamesContainer