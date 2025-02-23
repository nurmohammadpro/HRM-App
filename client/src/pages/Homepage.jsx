import MetaLogo from "../assets/meta-logo.png";
import { useNavigate } from "react-router-dom";
import HomepageBG from "../assets/Homepage-bg.png";
import AuthContainer from "../components/AuthContainer";

const Homepage = () => {
  return (
    <div className="flex gap-4 items-center justify-center h-screen w-full max-w-[1440px] mx-auto">
      <div className="w-1/2">
        <img src={HomepageBG} alt="HomepageBG" width={1080} />
      </div>

      <div className="w-1/2">
        <AuthContainer />
      </div>
    </div>
  );
};

export default Homepage;
