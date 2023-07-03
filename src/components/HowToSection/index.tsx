import { CollectionEntry } from "astro:content";
import useWindowSize from "lib/hooks/useWindowSize";
import { useState } from "react";

interface IHowToSection {
  data: CollectionEntry<"caseStudies">[];
}

const HowToSection = ({ data }: IHowToSection) => {
  const [currSelected, setCurrSelected] = useState(1);

  const { width } = useWindowSize();

  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-[1.5rem] grid-col-1 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((i, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full min-h-[35.3125rem] pb-[2.19rem] group cursor-pointer relative transition-all duration-300 ease-in-out"
          >
            <div
              onClick={() => setCurrSelected(idx)}
              className={`${
                currSelected === idx
                  ? `border border-spacing-[0.3] border-t-primary-1/[0.3] border-l-primary-1/[0.3] border-r-primary-1/[0.3] border-b-primary-1/[0.3] xl:border-b-transparent`
                  : ``
              } w-full h-full flex flex-col shadow-2 rounded-[8px] overflow-hidden
                `}
            >
              <div className="w-full h-[12.5rem] overflow-hidden">
                <img
                  src={i?.data?.image}
                  className="w-full bg-center bg-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="flex flex-col px-[1.5rem] w-max mb-[1.5rem]">
                <div className="p-[0.5rem] bg-secondary-6 text-secondary-2 text-[0.75rem] font-bold leading-[1.75rem] uppercase">
                  {i?.data?.tag}
                </div>
              </div>
              <div className="px-[1.5rem] grid grid-rows-[4rem_auto] gap-4">
                <h3 className="font-[600] leading-[2rem] text-[1.5rem] text-secondary-7 mb-[1rem]">
                  {i?.data?.title}
                </h3>
                <p className="text-secondary-8 leading-[1.5rem] overflow-ellipsis pb-8 ">
                  {i?.data?.description}
                </p>
              </div>
            </div>
            <div
              className={`hidden xl:flex w-full h-[4rem] ${
                currSelected === idx
                  ? `bg-white border border-t-transparent border-b-transparent border-l-primary-1/[0.3]  border-r-primary-1/[0.3]`
                  : `bg-transparent`
              } absolute bottom-0 -mb-[2px]`}
            />
          </div>
        ))}
      </div>
      <div
        className={`border  border-primary-1/[0.3] bg-white rounded-[1rem] w-full hidden lg:flex p-[2.5rem] shadow-3 ${
          currSelected === 0 ? `!rounded-tl-none` : ``
        } 
      ${currSelected === 3 ? `!rounded-tr-none` : ``}
      `}
      >
        <div className="w-full grid grid-cols-2 gap-[1.5rem] ">
          <div className="w-full h-full rounded-[1rem] overflow-hidden">
            <img
              src={data[currSelected]?.data?.image}
              alt=""
              className="w-full h-full bg-center bg-cover"
            />
          </div>
          <div className="bg-primary-3 rounded-[1rem] px-[3rem] py-[4.31rem] flex flex-col gap-[2.5rem]">
            <h5 className="text-white text-[1.5rem] font-[600] leading-[2.5rem]">
              {data[currSelected]?.data?.title}
            </h5>
            <p className="text-white leading-[1.5rem] ">
              {" "}
              {data[currSelected]?.body}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToSection;
