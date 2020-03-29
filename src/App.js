import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      formula: "123+45.2",
      result: "456",
      keyTriggered: " "
    }
    this.Write = this.Write.bind(this);
  }
  Write(event) {
    this.setState({
      formula: this.BuildFormula(event.target.value)
    });
  }
  BuildFormula(key)  //Keys possibilities: 0 1 2 3 4 5 6 7 8 9 . + - * / = back clear
  {
    var formula = this.state.formula;
    let regexNumbers = /[0-9]/;
    var lastKey = formula[formula.length - 1];
    var beforelastKey = formula[formula.length - 2];
    if (formula == '0') {
      formula = formula + '.';
    }
    if (regexNumbers.test(key)) {             //Test if Key is a number      
      return formula + key;
    }
    if (key == "clear") {                     //Clear the display
      return "";
    }
    if (key == "back")        //Clear last key
    {
      formula = this.EraseLastKey(formula);
      return formula;
    }
    if (key == "-") {
      if ((lastKey == '+') || (lastKey == 'x') || (lastKey == '/') || (lastKey == '-')) {
        if ((beforelastKey == '+') || (beforelastKey == 'x') || (beforelastKey == '/') || (beforelastKey == '-') || (beforelastKey == '.')) {
          formula = this.EraseLastKey(formula);
        }
      }
      return formula + key;
    }
    if ((key == '+') || (key == 'x') || (key == '/')) {    //If key is a symbol
      if (formula == "") {
        return formula;
      }
      if ((lastKey == '+') || (lastKey == 'x') || (lastKey == '/') || (lastKey == '.')) {
        //If the last key was a symbol, replace it for the new symbol
        formula = this.EraseLastKey(formula);
      }
      if (lastKey == '-') {
        return formula;
      }
      return formula + key;
    }
    if (key == '.')    //If key is a decimal point (.)
    {
      if (!regexNumbers.test(formula[formula.length - 1])) {    //If the first key in a number is a point put cero before the (.), example 0.123
        formula = formula + '0';
      }
      for (var i = formula.length - 1; i >= 0; i--) {  //Only one (.) per number
        if ((formula[i] == '+') || (formula[i] == '-') || (formula[i] == 'x') || (formula[i] == '/')) {
          break;
        }
        if (formula[i] == '.') {
          return formula;
        }
      }
      return formula + key;
    }
    return formula;
  }
  EraseLastKey(formula) {
    var result = formula.substring(0, formula.length - 1);
    return result;
  }

  render() {
    return (
      <div id="Calculator">
        <Display
          formula={this.state.formula}
          result={this.state.result} />
        <Keyboard
          write={this.Write} />
      </div>
    )
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="display">
        <div id="displayFormula">
          {this.props.formula}
        </div>
        <div id="displayResult">
          {this.props.result}
        </div>
      </div>
    )
  }
}

function Keyboard(props) {
  return (
    <div id="mainKeyboard">
      <KeyboardNumbers write={props.write} />
      <KeyboardOperators write={props.write} />
      <KeyboardClearEquals write={props.write} />
    </div>
  )
}
function KeyboardNumbers(props) {
  return (
    <div id="keyboardNumbers">
      <button id="zero" className="numberButton" value={"0"} onClick={props.write}>0</button>
      <button id="one" className="numberButton" value={"1"} onClick={props.write}>1</button>
      <button id="two" className="numberButton" value={"2"} onClick={props.write}>2</button>
      <button id="three" className="numberButton" value={"3"} onClick={props.write}>3</button>
      <button id="four" className="numberButton" value={"4"} onClick={props.write}>4</button>
      <button id="five" className="numberButton" value={"5"} onClick={props.write}>5</button>
      <button id="six" className="numberButton" value={"6"} onClick={props.write}>6</button>
      <button id="seven" className="numberButton" value={"7"} onClick={props.write}>7</button>
      <button id="eight" className="numberButton" value={"8"} onClick={props.write}>8</button>
      <button id="nine" className="numberButton" value={"9"} onClick={props.write}>9</button>
      <button id="decimal" className="numberButton" value={"."} onClick={props.write}>.</button>
      <button id="back" className="numberButton" value={"back"} onClick={props.write}><i class="fa fa-caret-square-o-left" aria-hidden="true"></i></button>
    </div>
  )
}
function KeyboardOperators(props) {
  return (
    <div id="keyboardOperators">
      <button id="add" className="operatorButton" value={"+"} onClick={props.write}><i class="fa fa-plus" aria-hidden="true"></i></button>
      <button id="subtract" className="operatorButton" value={"-"} onClick={props.write}><i class="fa fa-minus" aria-hidden="true"></i></button>
      <button id="multiply" className="operatorButton" value={"x"} onClick={props.write}><i class="fa fa-times" aria-hidden="true"></i></button>
      <button id="divide" className="operatorButton" value={"/"} onClick={props.write}><strong>/</strong></button>
    </div>
  )
}
function KeyboardClearEquals(props) {
  return (
    <div id="keyboardClearEquals">
      <button id="clear" value={"clear"} onClick={props.write}>AC</button>
      <button id="equals" value={"="} onClick={props.write}>=</button>
    </div>
  )
}

export default App;
