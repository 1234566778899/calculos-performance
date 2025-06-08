import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { VelocityCalculator } from './components/VelocityCalculator';
import { EPRCalculator } from './components/EprCalculator';
import WeightBalanceCalculator from './components/WeightBalanceCalculator';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route exact path='/a' element={< VelocityCalculator />} />
          <Route exact path='/b' element={< EPRCalculator />} />
          <Route exact path='/c' element={<WeightBalanceCalculator />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
