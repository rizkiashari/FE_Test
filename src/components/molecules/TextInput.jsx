import Input from "../atoms/Input";
import Paragraf from "../atoms/Paragraf";

const TextInput = ({ text, name, placeholder, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {text && <Paragraf text={text} color="text-[#000]" size="14px" />}
      <Input name={name} placeholder={placeholder} {...props} />
    </div>
  );
};

export default TextInput;
