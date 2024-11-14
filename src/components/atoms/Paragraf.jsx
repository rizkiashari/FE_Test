const Paragraf = ({ text, size, className, color }) => {
  return <p className={`${color} text-[${size}] ${className || ""}`}>{text}</p>;
};

export default Paragraf;
