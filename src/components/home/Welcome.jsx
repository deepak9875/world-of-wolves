import React from "react";
import Welcome1 from "../../assets/img/welcome1.png";
import Welcome2 from "../../assets/img/welcome2.png";
import Luna from "../../assets/svg/Luna.gif";

const Welcome = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5  py-5 justify-content-between">
          <div className="col-lg-auto d-flex justify-content-center flex-column flex-lg-row align-items-center">
            {/* <img className="w-100" src={wolves} alt="" /> */}
            <div className="img-wrapper mb-5 ">
              <img className="w-100" src={Welcome1} alt="" />{" "}
            </div>
            <div>
              <div className="img-wrapper mb-5 ">
                <img className="w-100" src={Luna} alt="" />{" "}
              </div>
              <div className="img-wrapper mb-5 ">
                <img className="w-100" src={Welcome2} alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4">
            <p className="world-wolves">Welcome To World of Wolves</p>
            <div className="border-line"></div>

            <p className="mt-5 world-wolves-para">
              World of Wolves is a concept that allows holders to breed their
              Alpha & Luna Wolves to make a new generation. This new generation
              of wolves will get access to frequent & exclusive trait drops so
              holders have the chance to upgrade and evolve their unique NFT
              over time, unlocking more rewards through staking or reselling.
            </p>
            <p className="mt-5 world-wolves-para">
              Holders will own all their past and future traits. There will be a
              secondary market where you can buy or sell any other released
              traits in order to further customise your NFT.
            </p>
            <p className="mt-5 world-wolves-para">
              The $WOW token powers the whole ecosystem. Holders can use $WOW
              and / or SOL in our marketplace to breed, customise, evolve and
              enter raffles / auctions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
