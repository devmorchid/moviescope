import './App.css';
import Navbar from './composants/Navbar';

import MovieDetail from './composants/MovieDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Liste from './composants/Liste';

function App() {
  return (
    <div>
     <Navbar />

    <BrowserRouter>
      <Routes>
       
       
        <Route path="/" element={<Home />} />
        <Route path='/Liste' element={<Liste />} />
       <Route path="/MovieDetail/:id" element={<MovieDetail />} />

     
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
