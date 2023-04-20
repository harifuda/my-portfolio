import * as React from "react";
import { Link } from "gatsby";
import "../style/site.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import {MdCloudDownload} from "@react-icons/all-files/md/MdCloudDownload";
import Typewriter from "typewriter-effect";
import PDF from "./Tuan_Resume_Stage.pdf";
import Tilt from "react-parallax-tilt";

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
      <nav class="flex items-center sm:px-4 px-2 py-2.5">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link to="/" class="block py-2 pl-3 pr-4 md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills/" class="block py-2 pl-3 pr-4 md:p-0">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects/" class="block py-2 pl-3 pr-4 md:p-0">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact/" class="block py-2 pl-3 pr-4 md:p-0">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anhtuannguyen14/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/vercheres">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 class="font-black">PORTFOLIO</h1>
      <div class="flex flex-row mb-13 gap-4">
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
        <div class="flex-col ml-10">
          <h3 class="font-black">
            <Typewriter
              options={{
                strings: "Manh Anh Tuan, Nguyen",
                autoStart: true,
                loop: false,
              }}
            />
          </h3>
          <h4 class="font-black">
            <Typewriter
              options={{ strings: texts, autoStart: true, loop: true }}
            />
          </h4>
          <div className="myIntro">
            <p>
            <Typewriter onInit={(tw) => 
              tw.typeString("Hello, welcome to my website!<br/>")
              .typeString("I am a CS student based in Saint-Lambert, Québec.<br/>")
              .typeString("Currently, I'm working towards getting my DEC in Computer Science.<br/>")
              .typeString("And I'm on track to graduate in May, 2023")
              .pauseFor(2500)
              .callFunction(() => {
                console.log("Typed out strings!");
              })
              .start()
            }
          />
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
      </div>
      <br />
      <br />
      <div class="flex flex-row mt-10 gap-4">
        <div class="flex-col">
          <h3 class="font-black">
            <Typewriter
              options={{
                strings: "Hobbies & Interests",
                autoStart: true,
                loop: false,
              }}
            />
          </h3>
          <h4 class="font-black">
            <Typewriter
              options={{
                strings: "Tabletop Games",
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
      </div>
      <br />
      <br />
      <div class="flex flex-row mb-13 gap-4">
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
            Whenever I don't feel lime picking up a book, I would go on Spotify, and YouTube to listen to
            podcasts that suit my interests and/or mood for that particular day of the week.
          </p>
          <p>
            I find listening to podcasts as a whole therapeutic, as it helps to wind down my mind and, at the same time, spark my creativity.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
