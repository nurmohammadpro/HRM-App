import { Outlet } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import { useLocation, useNavigate } from "react-router-dom";
import HomepageBG from "../assets/Homepage-bg.png";
import MetaLogo from "../assets/meta-logo.png";
import Button from "./Button";

const AuthContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="flex gap-4 items-center justify-center h-screen w-full max-w-[1440px] mx-auto">
      <div className="w-1/2">
        <img src={HomepageBG} alt="HomepageBG" width={1080} />
      </div>

      <div className="w-1/2">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 items-center mb-8">
            <img src={MetaLogo} alt="" width={40} height={40} />
            <h1 className="text-2xl font-bold font-content">HRM System</h1>
          </div>
          <div className="flex gap-2">
            <Button title="Login" variant="dark" onClick={handleLogin} />
            <Button title="Register" variant="dark" onClick={handleRegister} />
          </div>
          <Outlet />{" "}
          {/* This is where LoginComponent, RegisterComponent, etc. will render */}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
