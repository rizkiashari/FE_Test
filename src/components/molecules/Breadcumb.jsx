import Paragraf from "../atoms/Paragraf";

const Breadcumb = () => {
  return (
    <div className="px-6 bg-white py-2">
      <div className="flex items-center gap-4 text-[#00000073]">
        <Paragraf size="14px" color="text-[#00000073]" text="Stock Movement" />
        /
        <Paragraf size="14px" color="text-[#00000073]" text="Stock Movement" />
      </div>
      <Paragraf
        size="20px"
        color="text-[#262626]"
        className="font-semibold mt-2"
        text="Pemindahan barang"
      />
    </div>
  );
};

export default Breadcumb;
