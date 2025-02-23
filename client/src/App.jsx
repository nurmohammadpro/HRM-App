import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default App;
