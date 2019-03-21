import React from 'react';

export default function line({onClick, onClearClick, text}) {
    return (
      <div className="Line">
      {typeof(text) !== "undefined" && text.substring(0,1) !== "_" &&
        <span className="Clear" onClick={onClearClick}>
          x
        </span>
      }
        <span>&nbsp;</span>
        <span onClick={onClick}>
          {text}
        </span>
      </div>
    );
};