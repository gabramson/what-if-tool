import React from 'react';
import Line from './line';

export default function game({line, type}) {
    return (
      <div className={type}>
        {<Line text={line} onClick={() => Function.prototype} />}
      </div>
    );
};

