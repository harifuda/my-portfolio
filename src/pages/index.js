import * as React from "react";
import "../style/site.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import {MdCloudDownload} from "@react-icons/all-files/md/MdCloudDownload";
import Typewriter from "typewriter-effect";
import PDF from "./Tuan_Resume_Stage.pdf";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import Tilt from "react-parallax-tilt";
import Navbar from "../components/navbar";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const texts = ["INTERN @ SERTI KEYLOOP", "CS STUDENT @ CÉGÉP CHAMPLAIN"];

const IndexPage = () => {
  const onDownloadClick = () => {
    fetch(PDF).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = PDF;
        alink.click();
      });
    });
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Navbar/>
      <h1 class="font-black">PORTFOLIO</h1>
      <div class="flex flex-row mb-13 gap-4">
        <Fade>
        <div>
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
        </Fade>
        <Fade>
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
              options={{ strings: texts, autoStart: true, loop: true, delay: 15}}
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
          <button
            class="shadow bg-[#0081a7] hover:bg-[#029ecc] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={onDownloadClick}
          >
            <svg class="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <MdCloudDownload/>
            </svg>
            <span>Résumé</span>
          </button>
        </div>
        </Fade>
      </div>
      <br />
      <br />
      <div class="flex flex-row mt-10 gap-4">
        <Slide left>
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
        </Slide>
      </div>
      <br />
      <br />

      <div class="flex flex-row mb-13 gap-4">
        <Slide right>
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
      </Slide>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
