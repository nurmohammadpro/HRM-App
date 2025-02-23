import Button from "./Button";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

const AuthContainer = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Homepage Content */}
      <h2 className="font-heading text-6xl text-gray-800 mb-8">
        Welcome Back!
      </h2>
      <p className="text-gray-600 mb-6">Please login here</p>
      <form className="flex flex-col gap-4 mb-6" action="">
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => e.target.value}
        />
        <InputField
          label="Email"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => e.target.value}
        />
        <Button title="Login" type="submit" variant="dark" />
      </form>
      <p className="text-gray-400">
        Haven't an account? Please{" "}
        <span
          onClick={handleSignUp}
          className="font-bold underline hover:text-gray-600 cursor-pointer transition-all ease-in-out duration-300"
        >
          Register Now!
        </span>
      </p>
    </div>
  );
};

export default AuthContainer;
