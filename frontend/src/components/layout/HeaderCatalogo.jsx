import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-black text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4">
      <div className="flex flex-col items-center w-full md:w-auto">
        <div className="flex justify-center w-full">
          <Link to="/">
            <img
              src="/Logo.png"
              alt="Logo"
              className="h-24 w-auto md:h-32 md:w-60 object-contain"
            />
          </Link>
        </div>
        <p className="text-gray-400 text-xs md:text-2xs tracking-widest mt-1 font-bold py-2 text-center">
          UMA GRANDE SELEÇÃO DE FANTASIAS
        </p>
      </div>

      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <div className="flex flex-col leading-tight text-right">
          <Link to="/">
            <a>Home</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
