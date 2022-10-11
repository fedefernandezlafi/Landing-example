import "./App.css";
import Hero from "./components/Hero/Hero";
import travel from "./assets/bali.jpg";
import travel3 from "./assets/capadoccia.jpg";
import travel2 from "./assets/norway.jpg";
import Slider from "./components/Slider/Slider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero imageSrc={travel} />
      <Slider
        imageSrc={travel2}
        title={"Sé un explorador"}
        subtitle={
          "¡Nuestra plataforma ofrece una amplia variedad de destinos únicos!"
        }
      />
      <Slider
        imageSrc={travel3}
        title={"Recuerdos para toda la vida"}
        subtitle={
          "Las vacaciones de tus sueños estan a unos clicks de distancia!"
        }
        flipped={"true"}
      />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
