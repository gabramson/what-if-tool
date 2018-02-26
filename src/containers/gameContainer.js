import { connect } from 'react-redux'
import * as tournamentSelectors from '../store/tournament/reducer';
import game from '../components/game';


const mapStateToProps = (state, ownProps) => {
    return {
    //   gameId: ownProps.gameId,
    //   lines: tournamentSelectors.getLines(state, ownProps)
    gameId: 1, lines: [1, 2]
    }
  }
   
const gameContainer = connect(
    mapStateToProps
)(game)
 
export default gameContainer