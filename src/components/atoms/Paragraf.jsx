const Paragraf = ({ text, size, className }) => {
  return (
    <p className={`text-[#000] text-[${size}] ${className || ""}`}>{text}</p>
  );
};

export default Paragraf;
