import * as React from "react";
import { Link } from "gatsby";
import "../style/site.scss";
import { firestore } from "../utils/firebase";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { useState } from "react";
import Navbar from "../components/navbar";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    firestore
      .collection("projects")
      .get()
      .then((snapshot) => {
        snapshot.forEach((entry) => {
          var data = entry.data();
          setProjects((arr) => [...arr, data]);
        });
      });
  };

  React.useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Layout>
      <SEO title="projects" />
      <Navbar/>
      <h1 class="font-black">PROJECTS</h1>
      <p>
        Here are some projects that I worked on/have been a part of in the past.
      </p>
      <br />
        <div class="grid grid-cols-3">
          {projects &&
            projects.map((project) => {
              console.log(project);
              return (
                <div className="projectCard">
                  <div class="space-x-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                    <img
                      class="rounded-t-lg"
                      src={project.screenshot}
                      alt=""
                      style={{ wdith: project.width, height: project.height }}
                    />
                    <div class="p-5">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {project.name}
                      </h5>
                      <p class="mb-3 font-normal text-gray-700">
                        {project.description}
                      </p>
                      <p class="mb-5 font-normal text-gray-300">
                        Technologies: {project.technologies}
                      </p>
                      <a
                        href={project.link}
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#8338ec] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        GitHub
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
    </Layout>
  );
};

export default ProjectPage;

export const Head = () => <title>Projects</title>;
