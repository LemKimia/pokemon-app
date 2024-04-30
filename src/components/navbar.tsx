import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-gray-200 bg-red-900 ">
      <div className="container mx-auto grid grid-flow-col items-center ">
        <div className="grid justify-end ml-12">
          <Link to="/">
            <img
              className="size-16 ml-9"
              src="/icons8-pokeball-96.png"
              alt="pokedex-logo"
            />
          </Link>
        </div>
        <div className="grid grid-flow-col gap-1 justify-end  mr-5">
          <div className="rounded-full bg-red-600 size-6"></div>
          <div className="rounded-full bg-yellow-300 size-6"></div>
          <div className="rounded-full bg-green-500 size-6"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
