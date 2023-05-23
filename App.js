import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";

import SinglePage from './components/Singlepage';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SinglePage />} />
      </Routes>
    
    </>
  );
}

export default App;
