import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import A from './components/A';
import B from './components/B';
import Login from './components/Login';
import LoginWithHook from './components/Hooks/LoginWithHook';

let credentials =[{
  email:'shri@gmail',
  password:'shri1234'
}]

function App() {
  const [cred,setCred]=useState(credentials)
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
        <Route path='/login' element={<Login cred={cred} setCred={setCred}/>} />
        <Route path='/loginWithHook' element={<LoginWithHook cred={cred} setCred={setCred}/>} />

      </Routes>
    </div>
  );
}
export default App;
