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
  Write(event){
    this.setState({
      formula: this.buildFormula(event.target.value)
    });
  }
  buildFormula(key)
  {
    if(key=="equals")
    {
      return "time to calculate";
    }
    else
    {
      var formula = this.state.formula;
      let regexNumbers = /[0-9]/;
      if((regexNumbers.test(key))||(key=="-"))
      {
        formula = formula + key;
      }
      else
      {
        if(key="clear")
        {
          return " ";
        }
        else
        {
          if((formula[formula.length-1] == "+")||(formula[formula.length-1] == "-")||(formula[formula.length-1] == "*")||(formula[formula.length-1] == "/"))
          {
            formula = formula.substring(0, formula.length - 1);
          }
            formula = formula + key;
        }
      }
      return formula;
    }
  }

  render() {
    return (
      <div id="Calculator">
        <Display
          formula={this.state.formula}
          result={this.state.result}/>
        <Keyboard 
          write={this.Write}/>
      </div>
    )
  }
}

class Display extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
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

function Keyboard(props){
    return (
      <div id="mainKeyboard">
        <KeyboardNumbers write={props.write}/>
        <KeyboardOperators write={props.write}/>
        <KeyboardClearEquals write={props.write}/>
      </div>
    )
}
function KeyboardNumbers(props){
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
      <button id="multiply" className="operatorButton" value={"*"} onClick={props.write}><i class="fa fa-times" aria-hidden="true"></i></button>
      <button id="divide" className="operatorButton" value={"/"} onClick={props.write}><strong>/</strong></button>
    </div>
  )
}
function KeyboardClearEquals(props) {
  return (
    <div id="keyboardClearEquals">
      <button id="clear" value={"clear"} onClick={props.write}>AC</button>
      <button id="equals" value={"equals"} onClick={props.write}>=</button>
    </div>
  )
}

export default App;
