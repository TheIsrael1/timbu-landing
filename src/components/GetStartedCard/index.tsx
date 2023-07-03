import { CollectionEntry } from "astro:content";
import { Input } from "components/ui/input";

interface GetStartedCard {
  size?: "lg" | "sm";
  bussinessType?: string;
}

const GetStartedCard = ({ bussinessType, size = "lg" }: GetStartedCard) => {
  return (
    <div
      className={`w-full flex flex-col p-[2.5rem] ${
        size === "lg"
          ? ` border-8 border-secondary-4 rounded-[8px]`
          : `rounded-[1.5rem] shadow-5`
      } bg-white`}
    >
      <h5 className="text-secondary-2/[0.87] font-[700] text-[1.5rem] leading-[2rem] tracking-[0.01125rem] mb-[0.75rem]">
        Get Started!
      </h5>
      <span className="text-secondary-2/60 leading-[1.5rem] tracking-[0.00938rem]">
        Enter your Info in the text fields below.
      </span>
      <div className="w-full flex flex-col py-4 gap-4">
        <Input
          placeholder="Name"
          className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
        />
        <div
          className={`flex ${
            size === "lg" ? `flex-col` : `flex-col sm:flex-row`
          } gap-4`}
        >
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
      {!bussinessType ? (
        <>
          <h6 className="text-secondary-2/60 text-[1rem] md:text-[1.25rem] leading-[1.5rem] tracking-[0.00938rem] mb-[1.5rem]">
            What type of business do you run?
          </h6>
          <div
            className={`w-full flex ${
              size === "lg" ? `flex-col` : `flex-col sm:flex-row`
            } gap-4 mb-[2.5rem]`}
          >
            <Input
              placeholder="Business name"
              className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
            />
            <Input
              placeholder="Business type"
              className="h-[4rem] md:h-[4.5rem] px-[0.5rem] text-secondary-2/60 placeholder:text-secondary-2/[0.38]"
            />
          </div>
        </>
      ) : (
        <></>
      )}
      <button className="w-full h-[3.625rem] md:h-[4rem] rounded-[0.5rem] bg-primary-1 shadow-1 hover:opacity-90 active:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-white font-[500] leading-[1.5rem] tracking-[0.02875rem]">
          Continue
        </span>
      </button>
    </div>
  );
};
export default GetStartedCard;
