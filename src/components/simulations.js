import React from 'react';

export default function game({results, onRunSimulationsClick}) {
    return (
      <div className="Simulations">
          <button className="RunSimulations" onClick={this.onRunSimulationsClick} />
          {results}
      </div>
    );
};