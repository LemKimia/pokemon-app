import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-gray-200 bg-black px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex items-center justify-center">
        <Link to="/">
          <img
            className="size-16"
            src="/icons8-pokedex-48.png"
            alt="pokedex-logo"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
