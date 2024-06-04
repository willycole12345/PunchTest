import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import './Mobile.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
