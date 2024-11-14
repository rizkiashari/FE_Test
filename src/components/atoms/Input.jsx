const Input = ({ name, placeholder, ...props }) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      {...props}
      className="bg=[#F5F5F5] border border-[#D9D9D9] rounded-[2px] w-full py-2 px-3 focus:outline-none focus:border-[#1890FF]"
    />
  );
};

export default Input;
