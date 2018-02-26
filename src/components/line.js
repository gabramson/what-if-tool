import React from 'react';

export default function line({onClick, text}) {
    return (
      <div class="Line" onClick={onClick}>
        {text}
      </div>
    );
};