import * as React from "react"
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

import '../style/site.scss'

const Navbar = () => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
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
    </>
  )
}

export default Navbar