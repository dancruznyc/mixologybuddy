import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import MyBar from "./Pages/MyBar/MyBar";
import AllRecipes from "./Pages/AllRecipes/AllRecipes";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mybar" element={<MyBar />} />
          <Route path="/allrecipes" element={<AllRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
