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

const NavDrop = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            {" "}
            Item One
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="w-[20rem] h-[20rem]">Links</div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Item Two
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="w-[20rem] h-[20rem]">Links</div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavDrop;
