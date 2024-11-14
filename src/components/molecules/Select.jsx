import Paragraf from "../atoms/Paragraf";

const Select = ({ text, options, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <Paragraf text={text} color="text-[#000]" size="14px" />
      <select
        className="bg-white border border-[#D9D9D9] rounded-[2px] w-[14rem] py-2 px-3 focus:outline-none focus:border-[#1890FF]"
        {...props}
      >
        {options.map((option, index) => (
          <option
            disabled={index === 0}
            hidden={index === 0}
            key={index}
            value={option.value}
          >
            {option.label}
          </option>
        ))}

        {/* <option value="">Pilih Karyawan</option>
        <option value="1">Karyawan 1</option>
        <option value="2">Karyawan 2</option>
        <option value="3">Karyawan 3</option> */}
      </select>
    </div>
  );
};

export default Select;
