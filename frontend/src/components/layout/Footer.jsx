import Logo from "/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e redes sociais */}
        <div>
          {/* Logo (imagem será adicionada depois) */}
          <div className="mb-4">
            <img src={Logo} alt="Logo" className="w-32 h-auto" />
          </div>
          <p className="text-sm text-gray-400">
            UMA GRANDE SELEÇÃO DE FANTASIAS
          </p>

          {/* Ícones sociais */}
          <div className="flex space-x-3 mt-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">INFORMAÇÕES</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} EvoDevs. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
