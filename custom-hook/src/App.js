import './App.css';
import useCounter from "./UseCounter";
import Home from './Home';
import useParam from './useParam';

function App() {
  const CounterState = useCounter()
  const [name , email] = useParam('Afaque Ahmed', 'afaque@gmail.com')
  return (
    <>
      <h1> Count : {CounterState.Counter.count} </h1>
      <button onClick={CounterState.onPlus} >+</button>
      <button className='minus' onClick={CounterState.onMinus} >-</button>
      <Home />
      <br />
      <br />

      <h1> {name} </h1>
      <h1> {email} </h1>

    </>
  );
}

export default App;
