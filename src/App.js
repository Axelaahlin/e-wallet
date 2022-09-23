import './App.css';
import Home from './pages/Home';
import AddCardPage from './pages/AddCardPage';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addcard" element={<AddCardPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
