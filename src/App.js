import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home.js";
import Search from "./pages/search.js";
function App() {





  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
