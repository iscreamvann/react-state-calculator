import "./App.css"
import React from "react"
import PanelNumbers from "./components/PanelNumber/PanelNumbers"
import OperatorPanel from "./components/OperatorPanel/OperatorPanel"

function App() {
const [num1, setNum1] = React.useState(0)
const [op, setOp] = React.useState('+')
const [num2, setNum2] = React.useState(0)
const [result, setResult] = React.useState(0)

const onNum1Change = (value) => {
  return () => {
    if(value === 'CLEAR') {
        setNum1(0)
    } 
    else if(num1 === 0) {
      setNum1(value)
    }
    else {
        setNum1(num1.toString() + value)
    }
}}

const onNum2Change = (value) => {
  return () => {
    if(value === 'CLEAR') {
        setNum2(0)
    } 
    else if(num2 === 0) {
      setNum2(value)
    }
    else {
        setNum2(num2.toString() + value)
    }
}}

const onOperationChange = (value) => {
  return () => {
    setOp(value)
  }
}

const onResultClick = () => {
  if (op === '+') {
    setResult(num1+num2)
  }
else if (op === '-') {
  setResult(num1-num2)
}
else if (op === '*') {
  setResult(num1*num2)
}
else {
  setResult(num1 / num2)
}
}

  return (
    <div className="calculator">  
    < PanelNumbers value={num1} onChange={onNum1Change}/>

    < OperatorPanel value={op} onChange={onOperationChange} />

    < PanelNumbers value={num2} onChange={onNum2Change}/>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={onResultClick}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
