// import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home flex flex-col justify-center items-center">
      <Navbar />
      <Carousel />
      <div className="m-10 flex flex-row flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
