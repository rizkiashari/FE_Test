import Header from "./Header";

const Modal = ({ children }) => {
  return (
    <>
      <div className="absolute top-0 z-[5] bg-slate-500 w-screen h-screen opacity-65" />
      <div className="absolute max-h-[90%] overflow-auto w-[80%] rounded-lg px-12 py-4 bg-white z-10 translate-y-[-50%] top-[50%] -translate-x-[50%] left-[50%]">
        <Header text="Tambah Barang" isClose={true} />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Modal;
