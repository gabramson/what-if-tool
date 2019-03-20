import React from 'react';
import Line from './line';
import * as types from '../store/tournament/actionTypes';

export default function game({gameId, line, type, onClearClick }) {
    return (
      <div className={type}>
        {<Line text={line} onClearClick={() => onClearClick(gameId, types.lines.WINNER)} />}
      </div>
    );
};

