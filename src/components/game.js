import React from 'react';
import Line from './line';
import * as types from '../store/tournament/actionTypes';

export default function game({gameId, lines, onLineClick}) {
    return (
      <div className="Game">
        {<Line text={lines[types.lines.TOP]} onClick={() => onLineClick(gameId, types.lines.TOP)} />}
        {<Line text={lines[types.lines.BOTTOM]} onClick={() => onLineClick(gameId, types.lines.BOTTOM)} />}
      </div>
    );
};

