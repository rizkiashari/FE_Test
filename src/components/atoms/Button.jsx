const Button = ({ text, className, colorBg = "#E5A000", ...props }) => {
  return (
    <button
      className={`bg-[${colorBg}] border border-[${colorBg}] text-white px-4 py-2 rounded-sm hover:bg-yellow-500 ${
        className || ""
      }`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
