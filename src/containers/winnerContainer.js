import { connect } from "react-redux";
import * as tournamentSelectors from "../store/tournament/reducer";
import Winner from "../components/winner";
import { clearTeam } from "../store/tournament/actions";

const mapStateToProps = (state, ownProps) => {
  return {
    line: tournamentSelectors.getWinnerLine(state, ownProps.gameId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearClick: (gameId, line) => {
      dispatch(clearTeam(gameId, line));
    }
  };
};

const WinnerContainer = connect(mapStateToProps, mapDispatchToProps)(Winner);

export default WinnerContainer;
