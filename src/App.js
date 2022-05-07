import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Hero from "./components/home/Hero";
import Overview from "./components/home/Overview";

function App() {
    return (
        <div className="body-wrapper">
            <div className="hero-header-wrapper d-flex flex-column">
                <Header />
                <Hero />
                <Overview />
            </div>
            <Footer />
        </div>
    );
}

export default App;
