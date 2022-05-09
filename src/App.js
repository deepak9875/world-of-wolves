import "./App.css";
import Admin from "./components/admin/Admin";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Hero from "./components/home/Hero";
import Overview from "./components/admin/Overview";
import Plateform from "./components/home/Plateform";
import Team from "./components/home/Team";
import Welcome from "./components/home/Welcome";

function App() {
    return (
        <div className="body-wrapper">
            {/* <div className="hero-header-wrapper d-flex flex-column">
                <Header />
                <Hero />
            </div>
            <Overview />
            <Welcome />
            <Plateform />
            <Team />
            <Footer /> */}
            <Admin />
        </div>
    );
}

export default App;
