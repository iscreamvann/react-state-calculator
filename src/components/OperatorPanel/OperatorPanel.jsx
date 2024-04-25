export default function OperatorPanel(props) {
    return(
    <div className="panel">
    <p>{props.value}</p>
    <div className="numbers">
      <button onClick={
        props.onChange('+')}>+</button>
      <button onClick={
        props.onChange('-')}>-</button>
      <button onClick={
        props.onChange('*')}>*</button>
      <button onClick={
        props.onChange('÷')}>÷</button>
    </div>
  </div>
    )
}