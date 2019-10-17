import React from 'react';
import './App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
       <div id="Calculator">
         <Display/> 
         <Keyboard/>
       </div>
    )
  }
}

function Display()
{
  return(
    <div id="display">
         0123456789 
    </div>
  )
}

function Keyboard()
{
  return(
    <div id="mainKeyboard">
         <KeyboardNumbers/>
         <KeyboardOperators/>
         <KeyboardClearEquals/>
    </div>
  )
}
function KeyboardNumbers()
{
  return(
    <div id="keyboardNumbers">
         <button id="zero" className="aButton">0</button>
         <button id="one" className="aButton">1</button>
         <button id="two" className="aButton">2</button>
         <button id="three" className="aButton">3</button>
         <button id="four" className="aButton">4</button>
         <button id="five" className="aButton">5</button>
         <button id="six" className="aButton">6</button>
         <button id="seven" className="aButton">7</button>
         <button id="eight" className="aButton">8</button>
         <button id="nine" className="aButton">9</button>
         <button id="decimal" className="aButton">.</button>
         <button id="back" className="aButton"><i class="fa fa-caret-square-o-left" aria-hidden="true"></i></button>
    </div>
  )
}
function KeyboardOperators()
{
  return(
    <div id="keyboardOperators">
        <button id="add" className="aButton"><i class="fa fa-plus" aria-hidden="true"></i></button>
         <button id="subtract" className="aButton"><i class="fa fa-minus" aria-hidden="true"></i></button>
         <button id="multiply" className="aButton"><i class="fa fa-times" aria-hidden="true"></i></button>
         <button id="divide" className="aButton"><strong>/</strong></button>
    </div>
  )
}
function KeyboardClearEquals()
{
  return(
    <div id="keyboardClearEquals">
         <button id="clear" className="aButton">AC</button>
         <button id="equals" className="aButton">=</button>
    </div>
  )
}

export default App;
