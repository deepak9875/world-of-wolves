import React from "react";
import Footer from "./Footer";
import Header from "../common/Header";
import Hero from "./Hero";
import Overview from "./Overview";

const Admin = () => {
    return (
        <div>
            <div className="hero-header-wrapper d-flex flex-column">
                <Header />
                <Hero />
            </div>
            <Overview />
            <Footer />
        </div>
    );
};

export default Admin;
