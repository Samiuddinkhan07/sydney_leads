import { Button } from "../ui/button";
import { Links as link } from "./constant";

const Navbar = () => {
  return (
    <>
      <header className="flex flex-row px-10 pt-5 pb-4 border-b-2 items-center">
        <div className="flex flex-row gap-4 items-center w-full justify-between md:justify-normal">
          <div>
            <img src="/logo.jpg"  width={"80px"}/>
          </div>
          <div className="mx-auto hidden md:block">
            {/* navlinks */}
            <nav>
              <ul className="flex flex-row gap-10">
                {link.map((l, i) => (
                  <li className="cursor-pointer" key={i}>{l.name}</li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden md:block">
            <Button>Contact</Button>
          </div>
          <div className="block md:hidden">
            x
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
