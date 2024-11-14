import Notification from "../atoms/Notification";
import Paragraf from "../atoms/Paragraf";
import { IoCloseOutline } from "react-icons/io5";

const Header = ({ isClose, onClickClose, text }) => {
  return (
    <div className="container mx-auto py-4 flex justify-between items-center bg-white">
      <Paragraf
        size="18px"
        color="text-[#262626]"
        className="font-semibold"
        text={text}
      />
      <div className="flex gap-3 items-center">
        {isClose ? (
          <IoCloseOutline
            className="cursor-pointer w-7 h-7"
            onClick={onClickClose}
          />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
