import React, { useState } from 'react';
import './App.css';

function App() {
  
const [currentState, setState] = useState({
 
  prevOperation: '',
  currentStack: [],
  currentInputField: ''
});


const  numHandler = (event) =>{
  
 if (currentState.prevOperation === "=")
 {
   //   //clear inputfield if previous input was an equals sign
   setState({...currentState, currentInputField: event});
   return
 }
    let currentInputField = currentState.currentInputField + event;
    setState({ ...currentState, currentInputField})
  }


const  operationsHandler = (event) =>{

  let currentValue;
  
    switch(event){

      case '+':
      case '-':
      case '*':
      case '/':
          setState({...currentState, prevOperation: event, currentStack: [currentState.currentInputField], currentInputField: '' })
          break;

      case 'sqrt':
        currentValue = Math.sqrt(Number(currentState.currentInputField));
          setState({...currentState, currentStack: [currentValue], currentInputField: currentValue})
          break;

      case 'X2':
         currentValue = Math.pow(Number(currentState.currentInputField), 2);
         setState({...currentState, currentStack: [currentValue], currentInputField: currentValue});
        break;

      case 'X3':
          currentValue = Math.pow(Number(currentState.currentInputField), 3);
          setState({...currentState, currentStack: [currentValue], currentInputField: currentValue});
        break;        
      case 'C':
          setState(
            {
              currentnumber: '',
              prevOperation: '',
              currentStack: [],
              currentInputField: ''
            }
          )

        break;  

        case 'CE':
          if (currentState.currentStack){
            setState({...currentState, currentInputField: ''});
          }
          else {
            setState(
              {
                currentnumber: '',
                prevOperation: '',
                currentStack: [],
                currentInputField: ''
              }
            )
          }
          
        break;  
        default: return;
  }
}

const equalsHandler = () =>{
  
  let currentValue;
  
  if ((currentState.currentInputField !== '') && (currentState.prevOperation !== '='))
  {
    currentValue = eval(`${Number(currentState.currentStack)} ${currentState.prevOperation} ${Number(currentState.currentInputField)}`);
    setState({...currentState, currentStack: [currentValue], currentInputField: currentValue, prevOperation: '='});
  }
}


  console.log('this is the current Stack', currentState);

  
  return (
    <div className="App">
  <div className="grid-container">
  <div className="inputRow">
    <input 
    type="text" 
    id="inputField" 
    value={currentState.currentInputField} 
    readOnly/> 
    </div>

    <div className="leftButtons">
  <button id="X2"onClick={operationsHandler.bind(this, 'sqrt')}>sqrt</button>
  <button id="exp" onClick={operationsHandler.bind(this, 'X2')}>exp</button>
  <button id="C" onClick={operationsHandler.bind(this, 'C')}>C</button>
  <button id="CE" onClick={operationsHandler.bind(this, 'CE')}>CE</button>
  <button id="X3"  onClick={operationsHandler.bind(this, 'X3')}>X^3</button>
 

</div>
<div className="inner-container">

  <button className="number" onClick={numHandler.bind(this, '1')}>1</button>
  <button className="number" onClick={numHandler.bind(this, '2')}>2</button>
  <button className="number" onClick={numHandler.bind(this, '3')}>3</button>
 
  <button className="number" onClick={numHandler.bind(this, '4')}>4</button>
  <button className="number" onClick={numHandler.bind(this, '5')}>5</button>
  <button className="number" onClick={numHandler.bind(this, '6')}>6</button>
  
  <button className="number" onClick={numHandler.bind(this, '7')}>7</button>
  <button className="number" onClick={numHandler.bind(this, '8')}>8</button>
  <button className="number" onClick={numHandler.bind(this, '9')}>9</button>
  <button className="number" onClick={numHandler.bind(this, '0')}>0</button>
  <button className="number" onClick={numHandler.bind(this, '.')}>.</button>
  
  

</div>
<div className="rightButtons"> 
  <button id="plus"     onClick={operationsHandler.bind(this, '+')}>+</button>
  <button id="minus"    onClick={operationsHandler.bind(this, '-')}>-</button>
  <button id="divide"   onClick={operationsHandler.bind(this, '/')}>%</button>
  <button id="multiply" onClick={operationsHandler.bind(this, '*')}>*</button>
  <button id="equal"    onClick={equalsHandler.bind(this, '=')}>=</button>
 </div>
</div>


    </div>
  );
}

export default App;
