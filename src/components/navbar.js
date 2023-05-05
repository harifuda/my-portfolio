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
        <nav className="navbar">
        <div className="container" class="flex flex-wrap flex-col p-5 items-center justify-between max-w-screen-xl">
          
          <div class="w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills/">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects/">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact/">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/resume/">
                  Resume
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