import * as React from "react";
import "../style/site.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";
import AnimatedProgressProvider from "../components/animated-progress";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";

import Fade from "react-reveal/Fade"

import "react-circular-progressbar/dist/styles.css";

import Navbar from "../components/navbar";
const AboutPage = () => {
  const programmingData = [
    { completed: 94, label: "Swift" },
    { completed: 83, label: "Docker" },
    { completed: 86, label: "Python" },
    { completed: 89, label: "Java" },
    { completed: 83, label: "React" },
    { completed: 78, label: "C#" },
    { completed: 80, label: "HTML & CSS" },
  ];

  const languagesData = [
    { completed: 95, label: "Vietnamese" },
    { completed: 95, label: "English" },
    { completed: 75, label: "French" },
  ];
  return (
    <Layout>
      <SEO title="About" />
      <Navbar/>
      <br/>
      <br/>
      <div class="my-8 mb-14">
        <h4 class="font-black">My technical skills</h4>
      </div>
      <div class="flex gap-7">
        {programmingData.map((item) => (
          <Fade>
          <div
            class="flex flex-col justify-center"
            style={{ width: 150, height: 150 }}
          >
            <div>
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={item.completed}
                duration={1.2}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  const rounded = Math.round(value);
                  console.log(value);
                  return (
                    <CircularProgressbarWithChildren
                      value={rounded}
                      text={`${rounded}%`}
                      class="flex flex-col"
                      styles={buildStyles({
                        textSize: "15px",
                        pathColor: "#06d6a0",
                        trailColor: "#ffffff",
                        textColor: "#1b4332",
                      })}
                    >
                        <div>
                          <span class="flex flex-col text-center text-[15px] mt-14">{item.label}</span>
                        </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </AnimatedProgressProvider>
            </div>
            <div className="label">
            
            </div>
          </div>
          </Fade>
        ))}
      </div>
      <div class="mt-14 mb-14">
        <h4 class="font-black">Languages</h4>
      </div>
      <div class="flex gap-7">
        {languagesData.map((item) => (
          <Fade down>
          <div
            class="flex flex-col justify-center"
            style={{ width: 150, height: 150 }}
          >
            <div>
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={item.completed}
                duration={1.2}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  const rounded = Math.round(value);
                  return (
                    <CircularProgressbarWithChildren
                      value={rounded}
                      text={`${rounded}%`}
                      styles={buildStyles({
                        textSize: "15px",
                        pathColor: "#06d6a0",
                        trailColor: "#ffffff",
                        textColor: "#1b4332",
                      })}
                    >
                      <div>
                          <span class="flex flex-col text-center text-[15px] mt-14">{item.label}</span>
                      </div>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </AnimatedProgressProvider>
            </div>
          </div>
          </Fade>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About Me</title>;
