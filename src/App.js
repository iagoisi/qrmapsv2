import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Master from './pages/master';
import CidadeGold01 from './pages/cidade-gold-01';
import CidadeGold02 from './pages/cidade-gold-02';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/master' element={<Master />}></ Route>
        <Route path='/cidade-gold-01' element={<CidadeGold01 />}></ Route>
        <Route path='/cidade-gold-02' element={<CidadeGold02 />}></ Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
