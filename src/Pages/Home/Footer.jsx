import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-link-container">
        <div className="footer-items">
          <ul>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="introSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="About"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Portfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-social-icon">
          <ul>
            <li>
              <a
                href="https://github.com/leonardo-ochoa"
                class="navbar-content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.799 8.206 11.385.6.11.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.614-4.042-1.614-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.494.997.108-.773.417-1.303.758-1.605-2.655-.299-5.45-1.328-5.45-5.91 0-1.307.468-2.373 1.236-3.208-.124-.303-.536-1.518.117-3.16 0 0 1.002-.32 3.277 1.227.952-.264 1.97-.396 2.984-.4 1.014.004 2.032.136 2.984.4 2.274-1.547 3.276-1.227 3.276-1.227.655 1.642.243 2.857.119 3.16.77.835 1.235 1.901 1.235 3.208 0 4.593-2.799 5.608-5.463 5.901.429.371.809 1.102.809 2.217 0 1.603-.015 2.893-.015 3.287 0 .32.192.694.801.575C20.566 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com/in/leonardo-ochoa-"
                className="navbar-content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-content-container">
        <div className="footer-social-icon">
          <ul>
            <li>
              <p>
                leo.o47@icloud.com
              </p>
            </li>
            <li>
              <p>
                (509) 289-8474
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;