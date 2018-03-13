import React from 'react';

const probabilityCell = (probability, index) => {
    return(
        <td key={index}>
            {probability}
        </td>
    )
}

const simulationRow = (row) => {
    return (
        <tr key={row.PlayerName}><td>{row.PlayerName}</td>
        {row.Probabilities.map((v,i) => probabilityCell(v, i))}
        </tr>
    )
}

export default function simulations({results, onRunSimulationsClick}) {
    if (results.simulations[0] === undefined){
        return(
            <div className="Simulations"></div>
        )
    }
        return (
            <div className="Simulations">
                <button className="RunSimulations" onClick={onRunSimulationsClick}>
                    Run Simulations
                </button>
                <h3>Results</h3>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>First</th>
                                <th>Tie 1st or better</th>
                                <th>Second or better</th>
                                <th>Tie 2nd or better</th>
                                <th>Third or better</th>
                                <th>Tie 3rd or better</th>
                            </tr>
                            {results.simulations.map(simulationRow)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
};