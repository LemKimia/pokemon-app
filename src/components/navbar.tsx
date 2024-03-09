import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-background/95 sticky left-0 right-0 top-0 z-20 border-b-1 backdrop-blur">
      <nav className="container bg-black flex h-20 items-center justify-center px-4">
        <Link to="/">
          <img
            className="size-16"
            src="/icons8-pokedex-48.png"
            alt="pokedex-logo"
          />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar
