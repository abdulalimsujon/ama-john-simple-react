import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Route } from 'react-router-dom';

import OrDer from './components/OrDers/OrDer';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/orders' element={<OrDer></OrDer>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

      </Routes>

    </div>
  );
}

export default App;
