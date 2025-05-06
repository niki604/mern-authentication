import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <div>
    <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
      
    </BrowserRouter>
  )
}

export default App
