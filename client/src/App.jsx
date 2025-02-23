import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DashboardSidebar from "./components/DashboardSidebar";

const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Routes>
      <Route path="/" element={<DashboardSidebar />} />
    </Routes>
  );
};

export default App;
