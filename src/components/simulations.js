import React from 'react';

const simulationRow = (row) => {
    return (
        <tr><td>{row.PlayerName}</td></tr>
    )
}

export default function simulations({results, onRunSimulationsClick}) {
    console.log(results.simulations[0]);
    return (
      <div className="Simulations">
            <button className="RunSimulations" onClick={onRunSimulationsClick}>
                Run Simulations
            </button>
            <div>
                {/* {simulationRow(results.simulations[0])} */}
            </div>
      </div>
    );
};