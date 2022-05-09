import React from "react";
import Magic from "../../assets/img/magic.png";
import HeroImg from "../../assets/img/heroImg.png";
import heroGif from "../../assets/img/galaxy.gif";
const Hero = () => {
    return (
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
            <div className="container py-5 py-lg-0 my-5 my-lg-0">
                <div className="hero d-flex flex-column flex-lg-row justify-content-between">
                    <div className="left-hero d-flex flex-column align-items-start justify-content-center">
                        <h1>World of Wolves is a unique concept including staking, breeding, customisation & evolution</h1>
                        <a
                            target="_blank"
                            className="px-4 mt-4  py-2 bg-transparent btn-transparent"
                            href="https://www.magiceden.io/marketplace/alpha_wolves"
                        >
                            <img src={Magic} className="ms-2" alt="magic" /> <span className="d-inline-block px-2">Magic Eden</span>
                        </a>
                        <h2 className="mt-4 ms-3">Alpha Wolves </h2>
                        <div className="d-flex flex-wrap flex-xxl-nowrap mt-2 align-items-center">
                            <div className="d-flex mb-2 title align-items-center flex-nowrap ms-3">
                                {" "}
                                <span className="active">Supply:</span> <span className="detail ms-1">1,111</span>
                            </div>
                            <div className="d-flex mb-2 title  align-items-center flex-nowrap ms-4">
                                {" "}
                                <span className="active">Mint Date:</span> <span className="detail ms-1">3rd March 2022</span>
                            </div>
                            <div className="d-flex mb-2 title align-items-center flex-nowrap ms-4">
                                {" "}
                                <span className="active">Mint Price:</span> <span className="detail ms-1">0.8 SOL</span>
                            </div>
                            <div className="d-flex mb-2 title align-items-center flex-nowrap ms-3 me-4">
                                {" "}
                                <span className="active">Traits:</span> <span className="detail ms-1">169</span>
                            </div>
                        </div>

                        <h2 className="mt-4 ms-3">Luna Wolves </h2>
                        <div className="d-flex flex-wrap flex-xxl-nowrap mt-2 align-items-center">
                            <div className="d-flex mb-2 title align-items-center flex-nowrap ms-3">
                                {" "}
                                <span className="active">Supply:</span> <span className="detail ms-1">TBC</span>
                            </div>
                            <div className="d-flex mb-2 title  align-items-center flex-nowrap ms-4">
                                {" "}
                                <span className="active">Mint Date:</span> <span className="detail ms-1"> 17th May 2022</span>
                            </div>
                            <div className="d-flex mb-2 title align-items-center flex-nowrap ms-4">
                                {" "}
                                <span className="active">Mint Price:</span> <span className="detail ms-1"> TBC</span>
                            </div>
                            <div className="d-flex mb-2 title align-items-center flex-nowrap ms-3 ms-4">
                                <span className="active">Traits:</span> <span className="detail ms-1"> 170+</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-hero mt-5 mt-lg-0 pt-5 py-lg-0 d-flex justify-content-end">
                        <div className="border-1">
                            <div className="border-2">
                                <div className="border-3">
                                    <img src={heroGif} className="hero-img" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
