import React from "react";
import { Twitter } from "../common/Icons";
import { Teams } from "../helper";
const Team = () => {
  return (
    <section className="py-5 my-5" id="team">
      <div className="container">
        <h2 className="text-center font-family-poppins wolves-overview-header">
          The WOW Team
        </h2>
        <div className="d-flex justify-content-center">
          <div className="border-line"></div>
        </div>

        <div className="row mt-5 justify-content-center">
          {Teams.map((obj) => (
            <div className="col-auto mb-4 mx-lg-2">
              <div className="team-box">
                <img src={obj.image} className="w-100" alt={obj.title} />
                <div className="text-center mt-3">
                  <h3 className="overview-heading"> {obj.title} </h3>
                  <h6 className="my-3 overview-para-2"> {obj.destination} </h6>
                  <div className="team_twitter_icon d-inline-block">
                    <a target="_blank" href={obj.link}>
                      <Twitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
