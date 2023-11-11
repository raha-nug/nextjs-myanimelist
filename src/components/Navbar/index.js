import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <header>
      <div className="bg-indigo-500 flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-2xl text-white">
          MYANIMELIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
