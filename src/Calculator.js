import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="Calculator">
      <div class='title'>
          Calculator App
      </div>
      <div class='calculator'>
          <div class='result'>
            <text id='output'></text>
          </div>
          <div class='keypad'>
            <button class='number'>1</button>
            <button class='number'>2</button>
            <button class='number'>3</button>
            <button class='number'>4</button>
            <button class='number'>5</button>
            <button class='number'>6</button>
            <button class='number'>7</button>
            <button class='number'>8</button>
            <button class='number'>9</button>
          </div>
      </div>
    </div>
  );
}

export default Calculator;