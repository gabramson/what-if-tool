import React from 'react';

export default function line({onClick, onClearClick, text}) {
    return (
      <div className="Line">
        <span className="Clear" onClick={onClearClick}>
          x
        </span>
        <span>&nbsp;</span>
        <span onClick={onClick}>
          {text}
        </span>
      </div>
    );
};