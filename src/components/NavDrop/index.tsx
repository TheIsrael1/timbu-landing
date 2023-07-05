import { CollectionEntry } from "astro:content";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "components/ui/navigation-menu";

interface INavDrop {
  businesses: CollectionEntry<"businessTypes">[];
  tools: CollectionEntry<"navToolsLinks">[];
}

const NavDrop = ({ businesses, tools }: INavDrop) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem]">
            Tools
          </NavigationMenuTrigger>
          {/* bigger drop needs to be built when data and use case exists for other category types defined */}
          <NavigationMenuContent className="!w-[15.8125rem] min-h-[14rem] p-[1.5rem] flex flex-col gap-[1.5rem]">
            {tools[0]?.data?.main
              ?.filter((i) => i?.category === "features")
              .map((i, idx) => (
                <NavigationMenuItem
                  key={idx}
                  className="list-none group cursor-pointer"
                >
                  <span className="text-[1rem] !text-secondary-5 group-hover:!text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer transition-colors duration-300 ease-in-out">
                    <a href={`${i?.link}`}>{i?.title}</a>
                  </span>
                </NavigationMenuItem>
              ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-transparent text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem]">
            Business Types
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!w-[15.8125rem] min-h-[14rem] p-[1.5rem] flex flex-col gap-[1.5rem]">
            {businesses?.map((i, idx) => (
              <NavigationMenuItem
                key={idx}
                className="list-none group cursor-pointer"
              >
                <span className="text-[1rem] !text-secondary-5 group-hover:!text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer transition-colors duration-300 ease-in-out">
                  <a href={`/businesses/${i?.slug}`}>{i?.data?.name}</a>
                </span>
              </NavigationMenuItem>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <span className="text-[0.875rem] text-secondary-2 font-[500] leading-[1.5rem] tracking-[0.005rem] cursor-pointer">
            <a href="/pricing">Pricing</a>
          </span>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavDrop;
