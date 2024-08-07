import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import "tailwindcss/tailwind.css";

function Hello() {
  return (
    <div>
      <h1 className='text-teal-300'>Electron, React + Tailwind</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
