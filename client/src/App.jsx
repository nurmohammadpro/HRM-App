import { Routes, Route } from "react-router-dom";
import AuthContainer from "./components/AuthContainer"; // Directly use AuthContainer

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthContainer />} /> {/* All auth routes */}
      {/* Other routes (e.g., dashboard, profile) */}
    </Routes>
  );
};

export default App;
