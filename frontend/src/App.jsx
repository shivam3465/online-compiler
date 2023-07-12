import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.scss';
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";

function App() {
  
  return (
    <div className="app">      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
