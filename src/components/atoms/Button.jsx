const Button = ({ text, className, ...props }) => {
  return (
    <button
      className={`bg-[#E5A000] border border-[#E5A000] text-white px-4 py-2 rounded-sm hover:bg-yellow-500 ${
        className || ""
      }`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
