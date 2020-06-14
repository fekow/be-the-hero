import React from 'react';
import "./global.css";
import Routes from "./routes"
// JSX (JavaScript e XML)

function App() {
  return (
    <Routes />
  );
}

export default App;

// import React, {useState} from 'react';
  // //useState é um array com o valor e uma função que atualiza o valor- para usar seta o valor inicial com ()
  // const [counter, setCounter] = useState(0);

  // function increment () {
  //   setCounter(counter + 1);
  // }

  // return (
  //   <div>
  //     <Header>Contador: {counter}</Header>
  //     <button onClick={increment}>Incrementar</button>
  //   </div>