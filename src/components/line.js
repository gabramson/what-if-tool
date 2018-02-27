import React from 'react';

export default function line({onClick, text}) {
    return (
      <div className="Line" onClick={onClick}>
        {text}
      </div>
    );
};