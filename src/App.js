import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home.js";
import Search from "./pages/search.js";
import Details from "./components/Pages/Your-Details/Details";
import Purchase from "./components/Pages/Purchase-Complete/Purchase";
import Finalise from "./components/Pages/Finalise/Finalise";
import FormPage from "./pages/FormPage";
import FormPage2 from "./pages/FormPage2";

function App() {





  return (
    <div className="App">
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} /> 
          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/Finalise" element={<Finalise />} />
          <Route path="/FormPage" element={<FormPage />} />
          <Route path="/FormPage2" element={<FormPage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
