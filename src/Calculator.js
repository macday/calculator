import React from 'react';
import './Calculator.css';
import './Clock.css';

function Calculator() {
  let displayed = false;
  function calc(input) {
    var operators = ['*', '/', '+', '-', '%'];
    if (displayed == true && !operators.includes(input)) {
      document.getElementById('output').innerHTML = '0';
    }
    displayed = false;
    var current = document.getElementById('output').innerHTML;
    var output = '0';
    console.log(current);
    if (!isNaN(input) || operators.includes(input) || input === '.') {
      if (output != current) {
        output = current + input;
      } else if (!operators.includes(input)){
        output = input;
      }
    } else if (input === '=') {
      try {
        output = Math.round((eval(current) +Number.EPSILON) * 10000000000) / 10000000000;
        output = output.toString();
        displayed = true;
      } catch (SyntaxError) {
        alert("Invalid input! Please be careful!");
      }
    } else if (input === '+/-') {
      if (current[0] == '-') {
        console.log('neg');
      } else {
        console.log('pos');
      }
    }
    document.getElementById('output').innerHTML = output;
  }

  return (
    <div className="Calculator">
      <body>
        <div class='title'>
          Calculator App
        </div>
        <div class='calculator'>
          <div class='result'>
            <div id='output'>0</div>
          </div>
          <div class='keypad'>
            <button onClick={() => calc('C')} class='btn operand'>C</button>
            <button onClick={() => calc('+/-')} class='btn operand'>+/-</button>
            <button onClick={() => calc('%')} class='btn operand'>%</button>
            <button onClick={() => calc('/')} class='btn operation'>/</button>

            <button onClick={() => calc(7)} class='btn number'>7</button>
            <button onClick={() => calc(8)} class='btn number'>8</button>
            <button onClick={() => calc(9)} class='btn number'>9</button>
            <button onClick={() => calc('*')} class='btn operation'>x</button>

            <button onClick={() => calc('4')} class='btn number'>4</button>
            <button onClick={() => calc(5)} class='btn number'>5</button>
            <button onClick={() => calc(6)} class='btn number'>6</button>
            <button onClick={() => calc('-')} class='btn operation'>-</button>

            <button onClick={() => calc(1)} class='btn number'>1</button>
            <button onClick={() => calc(2)} class='btn number'>2</button>
            <button onClick={() => calc(3)} class='btn number'>3</button>
            <button onClick={() => calc('+')} class='btn operation'>+</button>

            <button onClick={() => calc(0)} class='btn zero number'>0</button>
            <button onClick={() => calc('.')} class='btn number'>.</button>
            <button onClick={() => calc('=')} class='btn equals operation'>=</button>
          </div>
        </div>

        <div className='Clock' id='clock'></div>

      </body>
    </div>
  );
}

function getTime() {
  var date = new Date();
  document.getElementById('clock').innerHTML = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}
setInterval(getTime, 1000)

export default Calculator;