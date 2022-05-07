import React from "react";
import { DiscordWhiteIcon, FollowUsIcon, TwitterWhiteIcon } from "./Icons";
import FooterNft from "../../assets/img/nftFooter.png";
import footerLogo from "../../assets/img/footerLogo.png";
const Footer = () => {
  return (
    <footer className="py-5 ">
      <div className="container my-5">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-auto mb-5 mb-md-0">
            <div className="d-flex align-items-center">
              <FollowUsIcon />
              <h4 className="ms-1 followtext">Follow Us</h4>
            </div>
            <h6 className="community">Be part of the Alpha Wolves community</h6>
            <div className="d-flex mt-3 align-items-center">
              <button className="twitter-btn  d-flex px-4 py-2 align-items-center">
                <TwitterWhiteIcon />
                <span>Twitter</span>
              </button>

              <button className="discord-btn ms-2  d-flex px-4 py-2 align-items-center">
                <DiscordWhiteIcon />
                <span>Discord</span>
              </button>
            </div>
          </div>
          <div className="col-auto mb-5 mb-md-0">
            <h3 className="seen">As Seen On</h3>
            <div className="d-flex flex-column flex-sm-row">
              <img className="me-1" src={FooterNft} alt="" />
              <img className="ms-1" src={footerLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
