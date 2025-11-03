import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ContatoForm from "../components/layout/ContatoForm";
import ContatoCard from "../components/layout/ContatoCard";
import Header from "../components/layout/HeaderCatalogo";
import Footer from "../components/layout/Footer";

function ContatoPage() {
  return (
    <div>
      <Header/>
      <div className="antialiased bg-black min-h-screen flex items-center justify-center p-2 sm:p-4">
        <div className="container mx-auto max-w-6xl">
          {/* Seção Superior - Formulário */}
          <div className="w-full lg:w-1/2 mx-auto p-4 sm:p-8">
            <ContatoForm />
          </div>

          
          <div className="relative bg-orange-400 p-4 sm:p-8 pt-16 sm:pt-24 md:p-8 lg:p-16 rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              
              <div className="text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  ENTRAR EM CONTATO
                </h2>
                <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-6">
                  Ei! Estamos ansiosos para falar você!
                </h3>
                <br />
                <br />
                <br />
                <div className="flex flex-wrap gap-2 sm:gap-4 ">
                  <a
                    href="#"
                    className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-orange-400 hover:bg-gray-200 transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-orange-400 hover:bg-gray-200 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-orange-400 hover:bg-gray-200 transition-colors "
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              
              <div className="relative flex justify-center lg:justify-start min-h-[120px] sm:min-h-[180px] md:min-h-[220px]">
                <div className="absolute bottom-0 lg:bottom-auto lg:-top-40 w-full flex justify-center lg:justify-end">
                  <ContatoCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContatoPage;
