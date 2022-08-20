import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Revew from './components/OrderRevew/Revew';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/revew" element={<Revew/>} />
      </Routes>
    </div>
  );
}

export default App;
