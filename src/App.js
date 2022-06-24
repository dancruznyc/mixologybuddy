import { useEffect } from "react";
import Admin from "./Pages/Admin/Admin";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="App">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
