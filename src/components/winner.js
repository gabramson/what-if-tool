import React from 'react';
import Line from './line';

export default function game({line}) {
    return (
      <div className="Winner">
        {<Line text={line} onClick={() => Function.prototype} />}
      </div>
    );
};

