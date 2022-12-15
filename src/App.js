import './App.css';
import NavBar from './components/NavBar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import A from './components/A';
import B from './components/B';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/a' element={<A/>}/>
        <Route path='/b' element={<B/>}/>
      </Routes>
    </div>
  );
}
export default App;
