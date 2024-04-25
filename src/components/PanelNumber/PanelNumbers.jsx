export default function PanelNumbers(props) {
  return (
    <div className="panel">
    <p>{props.value}</p>
    <div className="numbers">
      <button onClick={props.onChange(1)}>1</button>
      <button onClick={props.onChange(2)}>2</button>
      <button onClick={props.onChange(3)}>3</button>
      <button onClick={props.onChange(4)}>4</button>
      <button onClick={props.onChange(5)}>5</button>
      <button onClick={props.onChange(6)}>6</button>
      <button onClick={props.onChange(7)}>7</button>
      <button onClick={props.onChange(8)}>8</button>
      <button onClick={props.onChange(9)}>9</button>
      <button onClick={props.onChange(0)}>0</button>
      <button onClick={props.onChange('CLEAR')}>Clear</button>
    </div>
  </div>
  )
}