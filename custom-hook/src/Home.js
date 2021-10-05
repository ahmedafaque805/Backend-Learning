import useCounter from "./UseCounter";

function Home() {
  const CounterState = useCounter()
  return (
    <div className="App">
        <h1> Home </h1>
      <h1> Count : {CounterState.Counter.count} </h1>
      <button onClick={CounterState.onPlus} >+</button>
      <button className='minus' onClick={CounterState.onMinus} >-</button>
    
  
    </div>
  );
}

export default Home;
