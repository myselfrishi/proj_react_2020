import React from "react";
import { Progress } from "antd";
import ChipCloud from "../components/ChipCloud";
import clip2 from "../images/clip-2.png";
import Timelines from "../components/Timeline";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "antd/dist/antd.css";

const StyledPaper = withStyles({
  root: {
    fontFamily: "Mate SC, serif",
    backgroundColor: "",
    borderRadius: 5,
    paddingBottom: 50,
  },
})(Paper);

const Stats = () => {
  return (
    <div>
      <div className="headers">
        <h1>Timeline</h1>
        <h1>Skills</h1>
      </div>
      <div className="timeline">
        <div className="timelines">
          <Timelines />
        </div>
        <div className="chipWrapper">
          <div className="chipper">
            <StyledPaper elevation={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 200,
                }}
              >
                <ChipCloud />
              </div>
              <div className="stats">
                <div
                  style={{
                    width: 200,
                    marginLeft: 20,
                    marginTop: 30,
                  }}
                >
                  <Progress percent={37.5} size="small" /> B.E. 2019 - 2023
                  (90/240 ECTS)
                  <Progress percent={100} size="small" /> M.A. 2011 - 2015 (300
                  ECTS)
                </div>
                <img src={clip2} alt="Logo" width="250px" />
              </div>
            </StyledPaper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
