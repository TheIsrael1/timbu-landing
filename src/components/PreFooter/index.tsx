import preFooterLeft from "assets/preFooterLeft.svg";
import preFooterRight from "assets/preFooterRight.svg";

const PreFooter = () => {
  return (
    <div className="relative w-full h-[26.7rem] px-4 rounded-[0.8rem] flex-col bg-primary-1 flex justify-center items-center gap-[1.67rem]">
      <img
        src={preFooterLeft?.src}
        alt=""
        className="absolute bottom-0 left-0"
      />
      <img
        src={preFooterRight?.src}
        alt=""
        className="absolute top-0 right-0 hidden md:flex"
      />
      <h5 className="text-white text-[1.5rem] md:text-[3.5rem] font-[900] leading-[3.25rem] md:leading-[4.5rem] text-center">
        Are you ready to timbu?
      </h5>
      <p className="text-white text-[0.8rem] text-center leading-[1.25rem] tracking-[0.00419rem]">
        Get Started with Timbu to grow your business seamlessly!
      </p>
      <button className=" z-1 relative rounded-[0.75rem] px-[1.3rem] py-[0.66rem] bg-info-1 ">
        <span className="text-[1rem] leading-[2rem] tracking-[0.00625rem] text-white">
          Get Started Today
        </span>
      </button>
    </div>
  );
};

export default PreFooter;
