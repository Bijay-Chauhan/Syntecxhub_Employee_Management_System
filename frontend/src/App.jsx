import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Semi-transparent overlay for readability */}
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(3px)",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "24px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
