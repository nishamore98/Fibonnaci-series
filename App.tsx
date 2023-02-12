import * as React from 'react';
import './style.css';

export default function App() {
  const [val, setVal] = React.useState(0);

  const number = (e) => {
    setVal(e.target.value);
  };

  let temp = [0, 1];
  const generate = () => {
    for (var i = 2; i < val; i++) {
      temp[i] = temp[i - 1] + temp[i - 2];
    }
    window.alert(temp);
  };
  return (
    <div>
      <h1>program to generate fibonacci series up to n terms.</h1>
      <input type="number" onChange={(e) => number(e)} />
      <button onClick={() => generate()}>Generate</button>
    </div>
  );
}
