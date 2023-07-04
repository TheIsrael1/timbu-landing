import { CollectionEntry } from "astro:content";
import menuIcon from "assets/menuIcon.svg";
import { useState } from "react";
import { useLockBodyScroll } from "lib/hooks/useLockBodyScroll";
import timbuLogo from "icons/timbuLogo.svg";
import DpPlaceholder from "assets/dpPlaceholder.svg";
import { createPortal } from "react-dom";

interface INavDrop {
  businesses: CollectionEntry<"businessTypes">[];
  tools: CollectionEntry<"navToolsLinks">[];
}

const Menu = ({ businesses, tools }: INavDrop) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(menuOpen);

  return (
    <>
      <div
        onClick={() => setMenuOpen(true)}
        className="grid place-items-center rounded-[3.5rem] w-[3rem] h-[3rem] border border-[#E8E7EA] cursor-pointer
       hover:bg-slate-100 active:bg-transparent transition-colors ease-in-out duration-300
      "
      >
        <img src={menuIcon?.src} alt="" />
      </div>
      {createPortal(
        <div
          className={`fixed h-full ${
            menuOpen ? `translate-x-0` : `!-translate-x-full`
          } transition-transform duration-300 ease-in-out  w-[100vw] overflow-auto top-0 bottom-0 right-0 left-0 bg-white z-10 flex flex-col px-container-base`}
        >
          <div className="w-full flex items-center justify-between border-b border-b-primary-2 lg:border-b-secondary-1 pb-[0.75rem] md:pb-[1rem] pt-[1.5rem]">
            <img
              src={timbuLogo?.src}
              alt=""
              className="w-[5rem] h-[3.1875rem]"
            />
            <svg
              onClick={() => setMenuOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
          <div className="py-[2rem] flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[1rem]">
              <h4 className="text-secondary-2 font-[700]">Tools</h4>
              {tools[0]?.data?.main
                ?.filter((i) => i?.category === "features")
                .map((i, idx) => (
                  <span key={idx} className="list-none group cursor-pointer">
                    <span className="text-[15px] !text-secondary-5 group-hover:!text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer transition-colors duration-300 ease-in-out">
                      <a href={`${i?.link}`}>{i?.title}</a>
                    </span>
                  </span>
                ))}
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h4 className="text-secondary-2 font-[700]">Business Types</h4>
              {businesses?.map((i, idx) => (
                <span key={idx} className="list-none group cursor-pointer">
                  <span className="text-[15px] !text-secondary-5 group-hover:!text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer transition-colors duration-300 ease-in-out">
                    <a href={`/businesses/${i?.slug}`}>{i?.data?.name}</a>
                  </span>
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-[1rem]">
              <span className="text-[15px] !text-secondary-5 group-hover:!text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer transition-colors duration-300 ease-in-out">
                <a href={`/pricing`}>Pricing</a>
              </span>
              <span className="text-[15px] !text-secondary-5 group-hover:!text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer transition-colors duration-300 ease-in-out">
                <a href={`/pricing`}> Sign Up</a>
              </span>
              <button className="flex items-center justify-center group gap-2 h-[4rem] px-[1.25rem] border rounded-[8px] border-primary-1 hover:bg-primary-1/[0.05] transition-colors ease-in-out duration-300">
                <span className="text-[16px] text-secondary-2 group-hover:text-primary-1 transition-colors ease-in-out duration-300 font-[600] leading-[1.5rem] tracking-[0.005rem]">
                  Request a Demo
                </span>
                <span className="block w-[2rem] h-[2rem] bg-slate-200 rounded-[50px] overflow-hidden">
                  <img
                    src={DpPlaceholder?.src}
                    alt=""
                    className="w-full h-full"
                  />
                </span>
              </button>
              <button className="h-[4rem] px-[1.25rem] transition-opacity ease-in-out duration-300 rounded-[8px] bg-primary-1 hover:opacity-95 active:opacity-100">
                <span className="text-[16px] text-white font-[600] leading-[1.5rem] tracking-[0.0005rem]">
                  Try for free
                </span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Menu;
