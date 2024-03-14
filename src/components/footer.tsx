import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="sticky bottom-0 w-full border-gray-200 bg-black px-2 py-2.5 sm:px-4">
      <div className="grid grid-flow-row auto-rows-max grid-cols-2">
        <Link to={"/"}>
          <p className="flex flex-col items-center text-white">Home</p>
        </Link>

        <Link to={"/my-pokemon"}>
          <p className="flex flex-col items-center text-white">My Pokemon</p>
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
