import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import MyBar from "./Pages/MyBar/MyBar";
import AllRecipes from "./Pages/AllRecipes/AllRecipes";
import Recipe from "./Pages/Recipe/Recipe";
import Favorites from "./Pages/Favorites/Favorites";
import { MyBarContextProvider } from "./Services/MyBarContext";
import MyRecipes from "./Pages/MyRecipes/MyRecipes";

function App() {
  useEffect(() => {}, []);
  return (
    <MyBarContextProvider>
      <div className="App">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mybar" element={<MyBar />} />
            <Route path="/myrecipes" element={<MyRecipes />} />
            <Route path="/allrecipes" element={<AllRecipes />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </div>
    </MyBarContextProvider>
  );
}

export default App;
