import { connect } from "react-redux";
import { getGameLines } from "../store/tournament/reducer";
import { advanceTeam } from "../store/tournament/actions";
import Game from "../components/game";

const mapStateToProps = (state, ownProps) => {
  return {
    lines: getGameLines(state, ownProps)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLineClick: (gameId, line) => {
      dispatch(advanceTeam(gameId, line));
    }
  };
};
const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
