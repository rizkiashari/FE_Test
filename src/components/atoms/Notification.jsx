const Notification = () => {
  return (
    <div className="relative">
      <img className="w-7 h-7" src="/assets/icons/bell.svg" />
      <div className="absolute px-2 py-0.5 top-0 -right-1 bg-red-500 max-w-2 flex justify-center items-center rounded-full">
        <p className="text-[10px] text-white text-center">14</p>
      </div>
    </div>
  );
};

export default Notification;
