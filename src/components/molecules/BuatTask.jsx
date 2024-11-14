import Paragraf from "../atoms/Paragraf";
import TextInput from "./TextInput";

const BuatTask = () => {
  return (
    <div className="mx-6 my-7 bg-white">
      <div className="px-6 border shadow-md py-4">
        <Paragraf size="16px" color="text-[#000]" text="Buat Task Baru" />
      </div>
      <div className="px-6">
        <div>
          <TextInput
            name="task_no"
            text="Task No"
            placeholder="Task No"
            value="SM-PB-001/24/2024"
          />
        </div>
      </div>
    </div>
  );
};

export default BuatTask;
