import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home.js";
import FormPage from "./pages/FormPage";
import FormPage2 from "./pages/FormPage2";
function App() {





  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FormPage" element={<FormPage />} />
          <Route path="/FormPage2" element={<FormPage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
