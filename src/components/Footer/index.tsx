import React from "react";
import { Input } from "components/ui/input";
import timbuLogo from "icons/timbuLogo.svg";
import { Icon } from "astro-icon";
import { CollectionEntry } from "astro:content";

interface IFooter {
  data: CollectionEntry<"footerLinks">[];
}

const Footer = ({ data }: IFooter) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex-col sm:flex-row flex sm:items-center justify-between mb-[3.33rem]">
        <img className="w-[5rem]" src={timbuLogo?.src} />
        <div className="relative flex items-center">
          <Input
            className="w-[23rem] h-[3.8rem] relative right-2"
            placeholder="Enter your email address"
          />
          <button className="absolute right-0 text-white bg-info-1 py-[0.66rem] px-[1.3rem] rounded-[0.375rem]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 col-span-2 md:grid-cols-3  xl:grid-cols-6 gap-[5.57rem]">
        {data?.map((i, idx) => (
          <div key={idx} className={``}>
            <h6 className="font-[700] text-secondary-8 leading-[2rem] tracking-[-0.0125rem] mb-[1.25rem]">
              {i?.data?.category}
            </h6>
            <ul className="flex flex-col gap-[0.83rem] ">
              {i?.data?.links?.map((i, idx) => (
                <li className="text-secondary-8 text-[14px]  tracking-[0.00625rem]">
                  <a href={i?.url}>{i?.title}</a>
                </li>
              ))}
            </ul>
            <p className="text-secondary-8 text-[14px]  tracking-[0.00625rem]">
              {i?.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
