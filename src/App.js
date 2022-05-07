import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Hero from "./components/home/Hero";
import Overview from "./components/home/Overview";
import Plateform from "./components/home/Plateform";

function App() {
  return (
    <div className="body-wrapper">
      <div className="hero-header-wrapper d-flex flex-column">
        <Header />
        <Hero />
      </div>
      <Overview />
      <Plateform />
      <Footer />
    </div>
  );
}

export default App;
