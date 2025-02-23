const Button = ({ title, type, variant, onClick }) => {
  const buttonStyles = {
    dark: "bg-gray-800 text-white hover:bg-gray-900 border border-gray-800 hover:border-gray-900",
    light: "bg-white text-gray-800 hover:bg-gray-100 border border-gray-800",
  };

  return (
    <button
      className={`rounded-md px-4 py-2 cursor-pointer font-content font-bold transition-all ease-in-out duration-300 ${buttonStyles[variant]}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
