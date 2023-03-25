import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Game from "./pages/Game"
import Instruction from "./pages/Instructions"
import Survey from "./pages/Survey"

function App() {
return (
<>

<Navbar />
<div className="container">
  <Routes>
    <Route path="/" element={< Instruction />} />
    <Route path="/Game" element={<Game />} />
    <Route path="/Survey" element={<Survey />} />
  </Routes>
</div>
</>
)
}


function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
