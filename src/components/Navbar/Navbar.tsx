import {  MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Links as link } from "./constant";
import { useState } from "react";

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);

  const showMobileNav = () => {
    setNavMobile((prev) => !prev);
  };
  return (
    <>
      <header className="flex flex-row px-10 pt-5 pb-4 border-b-2 items-center">
        <div className="flex flex-row gap-4 items-center w-full justify-between md:justify-normal">
          <div>
            <img src="/logo.jpg" width={"80px"} />
          </div>
          <div className="mx-auto hidden md:block">
            {/* navlinks */}
            <nav>
              <ul className="flex flex-row gap-10">
                {link.map((l, i) => (
                  <li className="cursor-pointer" key={i}>
                    {l.name}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden md:block">
            <Button>Contact</Button>
          </div>
          <div className="block md:hidden" onClick={showMobileNav}>
            <MenuIcon />
          </div>
        </div>
      </header>
      {navMobile && (
        <div className="absolute right-0 bg-white h-[100vh] w-[300px] t-0 z-5">
          <div className="py-6 px-4" onClick={showMobileNav}>
            <X/>
          </div>
          <div>
            <ul className="flex flex-col gap-10 px-7 pt-8">
              {link.map((l, i) => (
                <li className="cursor-pointer" key={i}>
                  {l.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
