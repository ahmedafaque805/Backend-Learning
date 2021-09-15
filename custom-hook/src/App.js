import './App.css';
import useCounter from "./UseCounter";
import useNameChange from "./UsenameChange";

function App() {
  const CounterState = useCounter()
  const NameState = useNameChange(); 
  return (
    <div className="App">
      <h1> Count : {CounterState.Counter.count} </h1>
      <button onClick={CounterState.onPlus} >+</button>
      <button className='minus' onClick={CounterState.onMinus} >-</button>
    
    <h1> Name : {NameState.Name} </h1>
    <input placeholder='Enter Your Name' value={NameState.Name} onChange={NameState.onChange} />
    <button onClick={NameState.ChangeBtn}> Update </button>
    </div>
  );
}

export default App;
