import { connect } from "react-redux";
import { runSimulations } from "../store/simulations/actions";
import Simulations from "../components/simulations";

const mapStateToProps = state => {
  return {
    results: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRunSimulationsClick: () => {
      dispatch(runSimulations());
    }
  };
};

const SimulationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Simulations);

export default SimulationsContainer;
