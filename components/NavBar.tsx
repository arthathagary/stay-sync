import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "./toggle-mode";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Menubar className="h-20 px-20">
      <MenubarMenu>
        <div className="flex items-center justify-between w-full">
        <div>
        <h1 className="font-bold">StaySync</h1>
        </div>
        <div>
          <SearchBar />
        </div>
        <ModeToggle />
        </div>
      </MenubarMenu>
    </Menubar>
  );
};

export default NavBar;
