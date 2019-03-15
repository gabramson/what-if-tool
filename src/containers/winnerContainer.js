import { connect } from "react-redux";
import * as tournamentSelectors from "../store/tournament/reducer";
import Winner from "../components/winner";

const mapStateToProps = (state, ownProps) => {
  return {
    line: tournamentSelectors.getWinnerLine(state, ownProps.gameId)
  };
};
const WinnerContainer = connect(mapStateToProps)(Winner);

export default WinnerContainer;
