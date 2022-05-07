import React from "react";
import { FollowUsIcon } from "./Icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-auto">
            <div className="d-flex align-items-center">
              <FollowUsIcon />
              <h4 className="ms-1 followtext">Follow Us</h4>
            </div>
            <h6 className="community">Be part of the Alpha Wolves community</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
