import { CollectionEntry } from "astro:content";
import { useMemo, useState } from "react";
import checkIcon from "assets/blueCheck.svg";
import kite from "assets/kite.svg";

interface IBusinessSelection {
  businessTypes: CollectionEntry<"businessTypes">[];
  tools: CollectionEntry<"tools">[];
  // defined already
  bussinessType?: string;
}

const BusinessSelection = ({
  businessTypes,
  tools,
  bussinessType,
}: IBusinessSelection) => {
  const [currFilter, setCurrFilter] = useState("Everything");

  const [currTool, setCurrTool] = useState("");

  const currToolsByBusinessType = useMemo(() => {}, [currFilter, tools]);

  return (
    <div className="w-full flex flex-col">
      {/* filter section */}
      <div className="flex flex-col w-full mb-[1.5rem] md:mb-[4.5rem]">
        <h4 className="text-secondary-17 text-[1.5rem] md:text-[2rem] font-[600] leading-[2.5rem] mb-[1.5rem] md:mb-[2.5rem]">
          What type of Business do you have?
        </h4>
        <div className="flex flex-row w-full h-[4rem] md:h-[5rem] gap-[1rem] mb-[0.5rem]">
          <div className="flex-grow relative flex flex-row px-4 py-2 md:py-0 md:px-0 md:p-[1.5rem] rounded-[0.5rem] border border-secondary-14">
            <div className="flex items-center border-r border-r-secondary-14 text-[12px] md:text-[16px] px-2 md:px-4 text-secondary-2">
              Freelance
            </div>
            <div className="flex-grow flex items-center">
              <input className="form-input  border-0 focus:!ring-0 w-full" />
            </div>
            <img
              src={kite?.src}
              alt=""
              className="absolute  md:hidden right-4 w-[1.5rem] h-[1.5rem] top-4"
            />
          </div>
          <button
            className="hidden w-[5rem] h-[5rem] bg-secondary-2
           text-white font-[600] leading-[2rem] md:grid place-items-center rounded-[0.3125rem] cursor-pointer hover:opacity-95 active:opacity-100 transition-opacity ease-in-out duration-300"
          >
            GO
          </button>
        </div>
        <p className="text-secondary-8 text-[0.875rem] leading-[1.25rem] mb-[2.5rem]">
          Personalize your timbu experience by inputting your business type!
        </p>
        <div className="flex flex-col md:flex-row py-[1rem] md:px-[2.5rem] gap-[2.5rem] md:items-center rounded-[3.75rem] md:border border-secondary-14">
          <h5 className="text-secondary-2 font-[700] leading-[1.5rem] whitespace-nowrap ">
            Filter by your business Type:
          </h5>
          <div className="grid grid-cols-2 md:flex flex-row items-center gap-[1.5rem] overflow-auto no-scrollbar">
            <button
              onClick={() => setCurrFilter("Everything")}
              className={`px-[2rem] py-[.5rem] rounded-[1.5rem] ${
                currFilter !== "Everything"
                  ? `border border-secondary-2 md:border-0 text-secondary-2 hover:bg-slate-100`
                  : `text-white bg-secondary-2`
              } transition-colors ease-in-out duration-300`}
            >
              Everything
            </button>
            {businessTypes?.map((i, idx) => (
              <button
                onClick={() => setCurrFilter(i?.data?.name)}
                key={idx}
                className={`px-[2rem] py-[.5rem] rounded-[1.5rem]  ${
                  currFilter !== i?.data?.name
                    ? `border border-secondary-2 md:border-0 text-secondary-2 hover:bg-slate-100`
                    : `text-white bg-secondary-2`
                } transition-colors ease-in-out duration-300`}
              >
                {i?.data?.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* items section */}
      <div className="flex flex-col gap-[4.5rem]">
        <h5 className="text-secondary-2 text-[2.5rem] md:text-[3rem] leading-[3rem]  md:leading-[4rem] tracking-[-0.04688rem] md:-tracking-[0.04688rem] max-w-[34.375rem]">
          Which of Timbu’s Tools do you want to use?
        </h5>
        <div className="flex justify-center md:justify-start gap-x-4 flex-wrap gap-y-[2rem]">
          {/* change from tools to usememo var */}
          {tools?.map((i, idx) => (
            <div
              onClick={() => setCurrTool(i?.data?.toolName)}
              className="flex flex-col relative w-[17.4375rem] cursor-pointer group"
              key={idx}
            >
              <div className="absolute top-4 left-4 w-[1.5rem] h-[1.5rem] grid place-items-center !bg-white z-[5] border border-secondary-5 rounded-[4px]">
                {currTool === i?.data?.toolName ? (
                  <img src={checkIcon?.src} className="w-[14px]" alt="" />
                ) : (
                  <></>
                )}
              </div>
              <div
                className={`relative overflow-hidden rounded-[8px] border ${
                  currTool === i?.data?.toolName
                    ? `border-primary-1/[0.38]`
                    : `border-secondary-2/[0.1] `
                } h-[13.1875rem] mb-4`}
              >
                <div className="w-full h-full border-t-[16px] border-x-[16px] overflow-hidden  border-slate-50">
                  <img
                    src={i?.data?.sections[0]?.image}
                    className="w-full h-full group-hover:scale-105 group-active:scale-100  duration-300 ease-in-out transition-transform"
                    alt=""
                  />
                </div>
              </div>
              <h4 className="text-secondary-2 text-[1.3rem] font-[500] leading-[2rem]">
                {i?.data?.toolName}
              </h4>
              <span className="text-secondary-18 leading-[1rem]">
                {i?.data?.phrase}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSelection;
