import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import A from './components/A';
import B from './components/B';

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const incA = () => setA(a + 1);
	const incB = () => setB(b + 1);
	const decA = () => setA(a - 1);
	const decB = () => setB(b - 1);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home a={a} b={b} incA={incA} incB={incB} /> }/>
        <Route path='/a' element={<A a={a} b={b} incA={incA} decB={decB} />}/>
        <Route path='/b' element={<B a={a} b={b} decA={decA} incB={incB}/>}/>
      </Routes>
    </div>
  );
}
export default App;
