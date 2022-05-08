
import './App.css';
import Home from './Pages/Home';
import './Res.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Staking from './Pages/Staking';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>}>
      </Route>
        <Route path="staking" element={<Staking />}>
          
        </Route>
    </Routes>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
