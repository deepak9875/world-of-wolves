import React from "react";
import { DiscordWhiteIcon, TwitterWhiteIcon } from "../common/Icons";
// import FooterNft from "../../assets/img/nftFooter.png";
// import footerLogo from "../../assets/img/footerLogo.png";
const Footer = () => {
    return (
        <footer className="py-5 ">
            <div className="container my-5">
                {/* <div className="row align-items-center justify-content-center justify-content-md-between">
                    <div className="col-auto mb-5 mb-md-0">
                        <div className="d-flex align-items-center">
                            <FollowUsIcon />
                            <h4 className="ms-1 followtext">Follow Us</h4>
                        </div>
                        <h6 className="community">Be part of the Alpha Wolves community</h6>
                        <div className="d-flex mt-3 align-items-center">
                            <a
                                target="_blank"
                                href="https://twitter.com/alpha_wolvesnft"
                                className="twitter-btn  d-flex px-4 py-2 align-items-center"
                            >
                                <TwitterWhiteIcon />
                                <span className="ms-1">Twitter</span>
                            </a>

                            <a
                                target="_blank"
                                href="https://discord.com/invite/alphawolves"
                                className="discord-btn ms-2  d-flex px-4 py-2 align-items-center"
                            >
                                <DiscordWhiteIcon />
                                <span className="ms-1">Discord</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-auto mb-5 mb-md-0">
                        <h3 className="seen">As Seen On</h3>
                        <div className="d-flex flex-column align-items-center  flex-sm-row">
                            <a className="d-flex align-items-center" href="https://nftcalendar.io/" target="_blank">
                                <img className="me-1" src={FooterNft} alt="" />
                            </a>
                            <a className="d-flex align-items-center" href="https://raritysniper.com/" target="_blank">
                                <img className="ms-1" src={footerLogo} alt="" />
                            </a>
                        </div>
                    </div>
                </div> */}
                <div className="d-flex flex-column flex-md-row mt-5 align-items-center justify-content-between copywrite">
                    <div>
                        <p>© 2022 Alpha Wolves. All rights reserved.</p>
                    </div>
                    <div className="d-flex">
                        <div className="me-4">
                            <a href="https://discord.com/invite/alphawolves" target="_blank">
                                <DiscordWhiteIcon />
                            </a>
                        </div>
                        <div>
                            <a target="_blank" href="https://twitter.com/alpha_wolvesnft">
                                <TwitterWhiteIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
