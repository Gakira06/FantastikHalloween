import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Navibar from "../components/layout/Navibar";

const SobrePage = () => {
  return (
    <div>
      <Header />
      <Navibar />
      <div className="bg-black text-center p-4">
        <h1 className="text-bold text-5xl py-9 text-white">Sobre Nós</h1>
        <p className="text-white mx-auto max-w-2xl text-2xl">
          Somos apaixonados por transformar momentos comuns em memórias
          extraordinárias. Na Fantastik, acreditamos que a fantasia certa tem o
          poder de libertar a imaginação e tornar qualquer celebração
          inesquecível.
        </p>
        <p className="text-white p-8 mx-auto max-w-2xl text-2xl">
          Nossa missão é simples: oferecer "UMA GRANDE SELEÇÃO DE FANTASIAS".
          Embora nosso coração bata mais forte pelo Halloween, nossa coleção vai
          muito além, atendendo a todas as suas necessidades criativas.
        </p>
        <p className="text-white mx-auto max-w-2xl text-2xl ">
          Cada peça é selecionada pensando na qualidade e, claro, na diversão.
          Quer esteja a preparar-se para o Dia das Bruxas, uma festa temática ou
          apenas para despertar a sua criatividade, a Fantastik é o seu destino
          número um. Explore, divirta-se e encontre o seu lado fantastik!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SobrePage;
