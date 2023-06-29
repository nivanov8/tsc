import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './Components/Homepage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
    </>
  );
}

export default App;
