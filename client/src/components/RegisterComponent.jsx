import InputField from "./InputField";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2 className="font-heading text-6xl text-gray-800 mb-8">Join Us Now!</h2>
      <p className="text-gray-600 mb-6">Please register here</p>
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
        <Button title="Register" type="submit" variant="dark" />
      </form>
      <p className="text-gray-400">
        Already have an account? Please{" "}
        <span
          onClick={handleSignIn}
          className="font-bold underline hover:text-gray-600 cursor-pointer transition-all ease-in-out duration-300"
        >
          Login Now!
        </span>
      </p>
    </div>
  );
};

export default LoginComponent;
