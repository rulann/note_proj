import './App.css';
import Card from './notes';
import Nav from './leftnav'
import Remainder from './remainders'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <Nav/>
        <BrowserRouter>
        <Routes>
          <Route path="/notes" element={<Card />} />
          <Route path="/remainders" element={<Remainder />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
