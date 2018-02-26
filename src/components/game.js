import React from 'react';
import Line from './line';

export default function game({gameId, lines}) {
    return (
      <div class="Game">
      'hello world'
        {<Line text={lines[0]} onClick={() => alert(`game: ${gameId}, line: 1`)} />}
        {<Line text={lines[1]} onClick={() => Function.prototype} />}
      </div>
    );
};

