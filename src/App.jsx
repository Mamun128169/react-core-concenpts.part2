import './App.css'
import Count from './Count';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function HandleButton2() {
  alert("Button two clicked!");
}

function App() {

  function HandleButton() {
    alert("click me btn clicked!");
  }

  function ButtonHandle(num) {
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Count></Count>

      <Team></Team>

      <button onClick={HandleButton}>Click Me</button>
      <button onClick={HandleButton2}>Click Me 2</button>
      <button onClick={() => {alert('Third Btn clicked!')}}>Third Btn</button>
      <button onClick={() => {ButtonHandle(5)}}>Fourth Button</button>
      
    </>
  )
}

export default App
