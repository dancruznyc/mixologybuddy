import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import MyBar from "./Pages/MyBar/MyBar";
import AllRecipes from "./Pages/AllRecipes/AllRecipes";
import Recipe from "./Pages/Recipe/Recipe";
import Favorites from "./Pages/Favorites/Favorites";
import MyRecipes from "./Pages/MyRecipes/MyRecipes";
import News from "./Pages/News/News";
import Sales from "./Pages/Sales/Sales";
import { MyBarContextProvider } from "./Services/MyBarContext";
import { MyFavoritesContextProvider } from "./Services/MyFavoritesContext";
import Footer from "./Components/Footer/Footer";
import ContentWrapper from "./Components/ContentWrapper/ContentWrapper";

function App() {
  return (
    <MyBarContextProvider>
      <MyFavoritesContextProvider>
        <div className="App">
          <Router>
            <div className="app-sidebar--container">
              <Sidebar />
            </div>
            <ContentWrapper className="app--main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mybar" element={<MyBar />} />
                <Route path="/myrecipes" element={<MyRecipes />} />
                <Route path="/allrecipes" element={<AllRecipes />} />
                <Route path="/recipe/:id" element={<Recipe />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/news" element={<News />} />
                <Route path="/sales" element={<Sales />} />
              </Routes>
              <Footer />
            </ContentWrapper>
          </Router>
        </div>
      </MyFavoritesContextProvider>
    </MyBarContextProvider>
  );
}

export default App;
