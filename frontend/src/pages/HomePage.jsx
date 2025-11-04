import Navibar from "../components/layout/Navibar";
import Header from "../components/layout/Header";
import HomeImage from "../assets/Menina.jpg";
import Footer from "../components/layout/Footer";


const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Navibar></Navibar>
      <div className="relative max-h-96">
        <img
          src={HomeImage}
          alt="Home Image"
          className="w-screen max-h-96 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-white text-2xl font-semibold px-4 py-2 rounded">
            Encontre uma grande variedade de fantasias de Halloween.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
