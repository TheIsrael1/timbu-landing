import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import React from "react";

const RequestDemo = () => {
  return (
    <div className="w-full flex flex-col px-[1.5rem] py-[2.5rem] md:px-[2.5rem] border-8 border-secondary-4 rounded-[8px] bg-white">
      <h5 className="text-secondary-2/[0.87] font-[700] text-[1.5rem] leading-[2rem] tracking-[0.01125rem] mb-[0.75rem]">
        Request a Demo
      </h5>
      <span className="text-secondary-2/60 leading-[1.5rem] tracking-[0.00938rem]">
        Enter your Info in the text fields below.
      </span>
      <div className="w-full flex flex-col py-4 gap-4">
        <div className={`flex flex-col lg:flex-row gap-4`}>
          <Input
            placeholder="Email"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
          <Input
            placeholder="Phone number"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
        </div>
        <div className={`flex flex-col lg:flex-row gap-4`}>
          <Input
            placeholder="Email"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
          <Input
            placeholder="Phone number"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
        </div>
      </div>
      <h6 className="text-secondary-2/60 text-[1rem] md:text-[1.25rem] leading-[1.5rem] tracking-[0.00938rem] mb-[.5rem]">
        Company Details
      </h6>
      <div className="w-full flex flex-col pb-4 gap-4">
        <div className={`flex flex-col lg:flex-row gap-4`}>
          <Input
            placeholder="Email"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
          <Input
            placeholder="Phone number"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
        </div>
        <div className={`flex flex-col lg:flex-row gap-4`}>
          <Input
            placeholder="Email"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
          <Input
            placeholder="Phone number"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
        </div>
        <div className={`flex flex-col lg:flex-row gap-4`}>
          <Input
            placeholder="Email"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
          <Input
            placeholder="Phone number"
            className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
          />
        </div>
      </div>
      <h6 className="text-secondary-2/60 text-[1rem] md:text-[1.25rem] leading-[1.5rem] tracking-[0.00938rem] mb-[.5rem]">
        Anything else?
      </h6>
      <Textarea
        rows={6}
        className="px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38] mb-[2.5rem]"
      />
      <span className="text-secondary-2 text-[14px] font-[500] leading-[1.5rem] tracking-[0.005rem] mb-2 md:mb-4">
        You’ll get contacted within 3 work days.
      </span>
      <button className="w-full h-[3.625rem] md:h-[4rem] rounded-[0.5rem] bg-primary-1 shadow-1 hover:opacity-90 active:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-white font-[500] leading-[1.5rem] tracking-[0.02875rem]">
          Continue
        </span>
      </button>
    </div>
  );
};

export default RequestDemo;
