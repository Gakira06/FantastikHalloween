import Button from "../common/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black">
      <nav className="bg-orange-700 text-amber-100 p-3 px-4 md:px-6 rounded-t-2xl flex flex-col md:flex-row items-center md:justify-between font-serif font-bold uppercase text-sm shadow-lg gap-2 md:gap-0">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-md w-full md:w-auto gap-14 md:gap-0">
          <Button className="hover:text-black w-full md:w-auto">Home</Button>
          <Link to="/catalogo">
            <Button className="hover:text-black w-full md:w-auto">
              Produtos
            </Button>
          </Link>
          <Link to="/sobre">
            <Button className="hover:text-black w-full md:w-auto">
              Sobre Nós
            </Button>
          </Link>
          <Link to="/contato">
            <Button className="hover:text-black w-full md:w-auto">
              Contato
            </Button>
          </Link>
        </div>

        <div className="relative w-full md:w-auto mt-2 md:mt-0">
          <input
            type="text"
            className="bg-white rounded-full py-2.5 pl-5 pr-12 text-gray-500 font-sans text-sm focus:outline-none focus:ring-orange-300 w-full md:w-64"
          />
          <Button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">
            <img src="/IconSearch.png" alt="Icon Pesquisa" />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
