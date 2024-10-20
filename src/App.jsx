import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }
  
  const handleClick2 = () =>{
    alert('button clicked 2');
  }
  
  const addFive = (num) =>{
    alert(num + 5);
  }
  
  return (
    <>
      <h2>React Core Concept Part 2</h2>
      <Friends></Friends>
      <Users></Users>
    <Counter></Counter>
    <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('Third Clicked')}}>Third Clicked</button>
      <button onClick={() => {addFive(5)}}>Add Five</button>
    </>
  )
}

export default App
