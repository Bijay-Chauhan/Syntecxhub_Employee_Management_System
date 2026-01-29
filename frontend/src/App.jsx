import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="app-bg">
      <div className="app-overlay">
        <div className="app-container">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
