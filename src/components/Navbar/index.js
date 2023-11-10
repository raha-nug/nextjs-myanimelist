import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="bg-indigo-500 flex md:flex-row flex-col justify-between p-4 gap-2">

        <Link href="/" className="font-bold text-2xl text-white">MYANIMELIST</Link>
        <input type="text" className="" placeholder="Search Anime .."/>
      </div>
    </header>
  );
};

export default Navbar;
