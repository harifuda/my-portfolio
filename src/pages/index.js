import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import {MdCloudDownload} from "@react-icons/all-files/md/MdCloudDownload";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import Navbar from "../components/navbar";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import "../style/site.scss";

const texts = ["INTERN @ SERTI KEYLOOP", "CS STUDENT @ CÉGÉP CHAMPLAIN"];

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Navbar/>
      <h1 class="font-black">PORTFOLIO</h1>
      <div class="flex flex-row mb-13 gap-4">
        <Fade right>
        <div class="flex flex-col">
          <Tilt>
            <StaticImage
              src="../images/photo.jpg"
              class="rounded-lg drop-shadow-3xl"
              layout="constrained"
              alt="portrait"
              width={350}
              height={500}
              quality={90}
            />
          </Tilt>
        </div>

        <div class="flex-col ml-10">
          <h3 class="font-black">
            <Typewriter
              options={{
                strings: "Manh Anh Tuan, Nguyen",
                delay: 5,
                autoStart: true,
                loop: false,
              }}
            />
          </h3>
          <h4 class="font-black">
            <Typewriter
              options={{ strings: texts, autoStart: true, loop: true, delay: 20}}
            />
          </h4>

          <div className="myIntro">
            <p>

            <Typewriter options={{
              strings: "Hey there! Welcome to my website!<br/> I am a CS student based in Saint-Lambert, Québec.<br/> Currently, I'm working towards getting my DEC in Computer Science.<br/> And I'm on track to graduate in May, 2023.",
              autoStart: true,
              delay: 5,
              loop: false,
            }}/>
            </p>
          </div>
          <br/>
        </div>
        </Fade>
      </div>
      <br />
      <br />
      <div class="flex flex-row mt-10 mr-10 gap-4">
        <Fade left>
        <div class="flex-col">
          
          <h3 class="font-black">
            Hobbies & Interests
          </h3>
          <h4 class="font-black">
            <Typewriter
              options={{
                strings: "Tabletop Games",
                delay: 5,
                autoStart: true,
                loop: false,
              }}
            />
          </h4>
          <div class="flex-col">
            <p class="break-normal">
              I consider myself a tabletop game enthusiast, with games spanning
              from classic board/card games to the more recent publications.
            </p>
            <br />
            <p>
              I believe these are a great way to socialize with people from
              different walks of life. They can also help to minimize the
              cultural barriers by bridging people from all parts of the globe together.
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <Tilt>
            <StaticImage
              src="../images/chess.jpg"
              class="rounded-lg drop-shadow-3xl"
              layout="constrained"
              alt="portrait"
              width={750}
              height={500}
              quality={90}
            />
          </Tilt>
        </div>
        </Fade>
      </div>
      <br />
      <br />

      <div class="flex flex-row mb-13 mr-10 gap-4">
        <Fade right>
        <div>
          <Tilt>
            <StaticImage
              src="../images/podcasts.jpg"
              class="rounded-lg drop-shadow-3xl"
              layout="constrained"
              alt="portrait"
              width={678}
              height={500}
              quality={90}
            />
          </Tilt>
        </div>
        <div class="flex-col">
          <h4 class="font-black">
            <Typewriter
              options={{ strings: "Listening to podcasts", autoStart: true, loop: false }}
            />
          </h4>
          <p class="break-normal">
            Whenever I don't feel like picking up a book, I would go on Spotify, and YouTube to listen to
            podcasts that suit my interests and/or mood for that particular day of the week.
          </p>
          <p>
            I find listening to podcasts as a whole therapeutic, as it helps to wind down my mind and, at the same time, spark my creativity.
          </p>
        </div>
      </Fade>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
