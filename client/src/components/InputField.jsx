const InputField = ({ label, type, placeholder, onChance }) => {
  return (
    <div>
      <input
        className="transition-all ease-in-out duration-200 p-4 rounded-md bg-gray-50 mb-4 border border-gray-200 focus:outline-none focus:border focus:border-gray-500"
        type={type}
        label={label}
        placeholder={placeholder}
        onChange={onChance}
      />
    </div>
  );
};

export default InputField;
