import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../style/site.scss";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import Navbar from "../components/navbar";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Layout>
      <SEO title="Contact" />
      <Navbar/>

      <h1 class="font-black">LET'S GET IN TOUCH</h1>
      <div class="flex-none">

        <div class="flex justify-start">
          <form
            class="w-full max-w-lg"
            method="post"
            action="https://getform.io/f/71dc70f1-2cc4-41bf-90aa-bdb768b516e6"
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2"
                  for="grid-name"
                >
                  Name
                </label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-bold"
                  id="grid-email"
                  type="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2"
                  for="grid-email"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-bold"
                  id="grid-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class="no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  type="message"
                  name="emailmessage"
                  id="messageInput"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
            </div>
            <div class="flex space-x-4">
              <button
                disabled={!email || !name || !message}
                class="shadow bg-[#0081a7] hover:bg-[#029ecc] focus:shadow-outline disabled:bg-gray-500 focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;
