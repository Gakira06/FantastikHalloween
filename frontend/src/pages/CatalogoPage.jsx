import { useEffect, useState } from "react";
import axios from "axios";
import Categorias from "../components/Categorias";
import Header from "../components/layout/HeaderCatalogo";
import Footer from "../components/layout/Footer";
import Navibar from "../components/layout/Navibar"
import Button from "../components/common/Button"

const API_URL = "http://localhost:5001/fantasias";
const API_URL_image = "http://localhost:5001";

const CatalogoPage = () => {
  const [fantasia, setFantasias] = useState([]);
  const [allFantasias, setAllFantasias] = useState([]); // Guarda a lista original
  const [categorias, setCategorias] = useState([]);

  //FUNÇÃO FILTRAR ITENS
  const filtrarItens = (categoria) => {
    if (categoria === "todos") {
      // Se a categoria for "todos", mostra a lista original completa
      setFantasias(allFantasias);
    } else {
      // Filtra a lista original baseada na categoria selecionada
      const novosItens = allFantasias.filter(
        (item) => item.categoria === categoria
      );
      setFantasias(novosItens);
    }
  };

  const consultarFantasias = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      // Define a lista original e a lista a ser exibida
      setAllFantasias(response.data);
      setFantasias(response.data);
      // Extrai as categorias únicas dos dados e adiciona a opção "todos"
      const allCategories = [
        "todos",
        ...new Set(response.data.map((item) => item.categoria)),
      ];
      setCategorias(allCategories);
    } catch (error) {
      console.log("erro ao connsultar fantasia", error);
    }
  };

  useEffect(() => {
    consultarFantasias();
  }, []);

  return (
    <div className="bg-1">
      <Header />
      <Navibar />
      <div className="mt-10">
        <Categorias filtroItems={filtrarItens} categorias={categorias} />
      </div>
      <ul className="flex flex-wrap justify-center items-center gap-20 p-4">
        {fantasia.map((item) => {
          const imagePath = item.imagem.replace(/\\/g, "/");
          const imageUrl = `${API_URL_image}/${imagePath}`;
          return (
            <li key={item.id} className="flex flex-col items-center">
              <div className="bg-2 p-4 shadow shadow-1 border border-s-1">
                <div
                  className="w-full max-w-xs mx-auto flex items-center justify-center bg-white rounded-lg overflow-hidden"
                  style={{ aspectRatio: "3/4" }}
                >
                  <img
                    src={imageUrl}
                    alt={item.nome}
                    className="w-full h-auto max-h-80 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-white">{item.nome}</h2>
                  <p className="text-4">{item.descricao}</p>
                  <p className="text-4">
                    from{" "}
                    <span className="text-3 text-lg">R${item.oferta} </span>
                    <strong className="text-white text-sm">
                      R${item.preco}{" "}
                    </strong>
                  </p>
                </div>
              </div>
              <Button className="pt-2 pb-2 pl-16 pr-16 mt-6 bg-3 rounded-2xl hover:bg-orange-700 ">
                Comprar
              </Button>
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default CatalogoPage;
