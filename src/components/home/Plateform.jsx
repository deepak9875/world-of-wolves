import React from "react";
import PlateFormImg from "../../assets/img/plateform.png";
const Plateform = () => {
  return (
    <section className="plateform-section py-md-5 my-5">
      <div className="container d-flex flex-lg-row flex-column justify-content-between align-items-center">
        <div className="left-plateform mb-5 mb-lg-0">
          <h3 className="world-wolves">Advanced Staking Platform</h3>
          <div className="border-line"></div>
          <p className="world-wolves-para">
            Our staking platform uses next gen technology which allows holders
            to keep their NFT in their wallet and still claim our $WOW token
            over time.
          </p>
          <p className="world-wolves-para">
            Part of the reason is security, although breeding, customising and
            evolving your wolf requires the ownership of an Alpha & Luna wolf.
            Therefore our holders don’t need to unstake in order to take
            advantage of our additional utility that we are building.
          </p>

          <a
            target="_blank"
            href="https://crazygoatclub.io"
            className="learn-more"
          >
            Stake your NFTs here
          </a>
        </div>
        <div className="right-plateform mb-5 mb-lg-0">
          <img src={PlateFormImg} className="w-100" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Plateform;
