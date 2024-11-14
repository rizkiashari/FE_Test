import Notification from "../atoms/Notification";
import Paragraf from "../atoms/Paragraf";

const Header = () => {
  return (
    <div className="container mx-auto py-4 flex justify-between items-center">
      <Paragraf
        size="18px"
        color="text-[#262626]"
        className="font-semibold"
        text="Warehouse Management System"
      />
      <div className="flex gap-3 items-center">
        <Notification />
        <div className="flex gap-2 items-center justify-center">
          <img
            className="w-8 h-8 rounded-full"
            src="/assets/images/Setting.png"
          />
          <Paragraf
            size="14px"
            color="text-[#262626]"
            className="font-semibold"
            text="User"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
