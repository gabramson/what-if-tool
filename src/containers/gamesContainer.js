import React from "react";
import { connect } from "react-redux";
import { getGames } from "../store/tournament/reducer";
import GameContainer from "./gameContainer";

const mapStateToProps = (state, ownProps) => {
  return {
    games: getGames(state),
    region: ownProps.regionId
  };
};

const getRoundClass = (rounds, gamesCount, game) => {
  const round = rounds - Math.floor(Math.log2(gamesCount + 1 - game));
  return `Round${round}`;
};

const inRegion = (game, region) => {
  switch(region) {
    case 1:
      return((game>=1 && game <=8) || (game>=33 && game <=36) || game===49 || game===50 || game === 57);
    case 2:
      return((game>=9 && game <=16) || (game>=37 && game <=40) || game===51 || game===52 || game === 58 );
    case 3:
      return((game>=17 && game <=24) || (game>=41 && game <=44) || game===53 || game===54 || game === 59 );
    case 4:
      return((game>=25 && game <=32) || (game>=45 && game <=48) || game===55 || game===56 || game === 60 );
    default:
      return( game>=61 );
  }
}

const Games = ({ games, region }) => {
  const gamesIndices = Array.from({ length: games }, (el, index) => index + 1);
  const gamesCount = gamesIndices.length;
  const rounds = Math.log2(gamesIndices.length + 1);
  const gamesList = gamesIndices
    .filter(i => inRegion(i, parseInt(region, 10)))
    .map(i => (
      <div className={getRoundClass(rounds, gamesCount, i)} key={i}>
        <GameContainer gameId={i} />
        <br />
      </div>
    ));
  return <div className="Games">{gamesList}</div>;
};
const GamesContainer = connect(mapStateToProps)(Games);

export default GamesContainer;
