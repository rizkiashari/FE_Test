const Button = ({ text, className, colorBg, ...props }) => {
  return (
    <button
      className={`bg-[${colorBg}] border border-[${colorBg}] px-4 py-2 rounded-sm ${
        className || ""
      }`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
