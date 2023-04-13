import React, { useState } from "react";
import "./Navbar.scss";
import {
  FaBars,
  FaFacebook,
  FaSpotify,
  FaInstagram,
  FaYoutube,
  FaRegWindowClose
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ token, logout }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar p-2 navbar-expand-lg navbar-dark bg-transparent">
      <Link className="navbar-brand p-0 font-monospace fs-3 fw-semibold" to="/">
        Noxe
      </Link>
      <button  onClick={() => setToggle(true)} className="navbar-toggler d-lg-none">
        <FaBars />
      </button>
      {toggle && (
              <div className="navbar-mobile position-fixed end-0">

                  {token != null ? <>
                                  <ul className="navbar-nav mr-auto py-5 d-flex flex-column position-relative">
                                  <li className="nav-item">
                                    <NavLink
                                      onClick={() => setToggle(false)}
                                      to="home"
                                      className={({ isActive }) =>
                                        isActive
                                          ? "nav-link active px-2 fw-bold"
                                          : "nav-link"
                                      }
                                    >
                                      Home
                                    </NavLink>
                                  </li>
                
                                  <li className="nav-item">
                                    <NavLink
                                      onClick={() => setToggle(false)}
                                      to="movies"
                                      className={({ isActive }) =>
                                        isActive
                                          ? "nav-link px-2 active fw-bold"
                                          : "nav-link"
                                      }
                                    >
                                      Movies
                                    </NavLink>
                                  </li>
                
                                  <li className="nav-item">
                                    <NavLink
                                      onClick={() => setToggle(false)}
                                      to="tvshow"
                                      className={({ isActive }) =>
                                        isActive
                                          ? "nav-link px-2 active fw-bold"
                                          : "nav-link"
                                      }
                                    >
                                      Tvshow
                                    </NavLink>
                                  </li>
                
                                  <li className="nav-item">
                                    <NavLink
                                      onClick={() => setToggle(false)}
                                      to="people"
                                      className={({ isActive }) =>
                                        isActive
                                          ? "nav-link px-2 active fw-bold"
                                          : "nav-link"
                                      }
                                    >
                                      People
                                    </NavLink>
                                  </li>
                
                                  <li className="nav-item">
                                    <NavLink
                                      onClick={() => setToggle(false)}
                                      to="about"
                                      className={({ isActive }) =>
                                        isActive
                                          ? "nav-link px-2 active fw-bold"
                                          : "nav-link"
                                      }
                                    >
                                      About
                                    </NavLink>
                                  </li>
                                  <li className="px-2 my-2 fw-bolder">
                                    <span onClick={() => logout()}>LogOut</span>
                                  </li>
                
                                  <FaRegWindowClose onClick={() => setToggle(false)} className=" position-absolute close-button fs-3" />
                                </ul>
                
                                <ul className="navbar-nav align-items-center justify-content-center flex-row ms-auto mt-5">
                                  <li className="px-1 fs-5">
                                    <a
                                      href="https://www.facebook.com"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <FaFacebook />
                                    </a>
                                  </li>
                                  <li className="px-1 fs-5">
                                    <a
                                      href="https://www.spotify.com"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <FaSpotify />
                                    </a>
                                  </li>
                                  <li className="px-1 fs-5">
                                    <a
                                      href="https://www.instagram.com"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <FaInstagram />
                                    </a>
                                  </li>
                                  <li className="px-1 fs-5">
                                    <a
                                      href="https://www.youtube.com"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <FaYoutube />
                                    </a>
                                  </li>
                                </ul> 
                                </>: <>
                                <FaRegWindowClose onClick={() => setToggle(false)} className=" position-absolute close-button fs-3" />
                                <ul className="navbar-nav ms-auto my-5 mt-lg-0">
                                <li className="nav-item">
                                  <NavLink
                                    onClick={() => setToggle(false)}
                                    to="login"
                                    className={({ isActive }) =>
                                      isActive
                                        ? "nav-link text-muted active fw-bold"
                                        : "nav-link text-muted"
                                    }
                                    href="#"
                                  >
                                    Login
                                  </NavLink>
                                </li>
                                <li className="nav-item">
                                  <NavLink
                                    onClick={() => setToggle(false)}
                                    to="register"
                                    className={({ isActive }) =>
                                      isActive
                                        ? "nav-link text-muted active fw-bold"
                                        : "nav-link text-muted"
                                    }
                                    href="#"
                                  >
                                    Register
                                  </NavLink>
                                </li>
                                <ul className="social-media navbar-nav flex-row justify-content-center align-items-center mx-3">
                                  <li className="px-1 fs-5">
                                    <a
                                      href="https://www.facebook.com"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <FaFacebook />
                                    </a>
                                  </li>
                                  <li className="px-1 fs-5">
                                    <a
                                      href="https://www.spotify.com"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <FaSpotify />
                                    </a>
                                  </li>
                                  <li className="px-1 fs-5">
                                    <a
                                      href="https://www.instagram.com"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <FaInstagram />
                                    </a>
                                  </li>
                                  <li className="px-1 fs-5">
                                    <a
                                      href="https://www.youtube.com"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <FaYoutube />
                                    </a>
                                  </li>
                                </ul>
                              </ul>

                              </>}

              </div>
            )}
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        {token != null ? (
          <>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  to="home"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-muted active fw-bold"
                      : "nav-link text-muted"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="movies"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-muted active fw-bold"
                      : "nav-link text-muted"
                  }
                >
                  Movies
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="tvshow"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-muted active fw-bold"
                      : "nav-link text-muted"
                  }
                >
                  Tvshow
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="people"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-muted active fw-bold"
                      : "nav-link text-muted"
                  }
                >
                  People
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-muted active fw-bold"
                      : "nav-link text-muted"
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-muted active fw-bold"
                      : "nav-link text-muted"
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav align-items-center ms-auto mt-2 mt-lg-0">
              <li className="px-1 fs-5">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="px-1 fs-5">
                <a
                  href="https://www.spotify.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSpotify />
                </a>
              </li>
              <li className="px-1 fs-5">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="px-1 fs-5">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>

              <form className="form-inline my-2 my-lg-0 px-2">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
              </form>

              <li className="px-2">
                <span onClick={() => logout()}>LogOut</span>
              </li>
            </ul>

          </>
        ) : (
          // If not logged in
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <ul className="social-media navbar-nav align-items-center mx-3">
              <li className="px-1 fs-5">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="px-1 fs-5">
                <a
                  href="https://www.spotify.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSpotify />
                </a>
              </li>
              <li className="px-1 fs-5">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="px-1 fs-5">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>

            <li className="nav-item">
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-muted active fw-bold"
                    : "nav-link text-muted"
                }
                href="#"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="register"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-muted active fw-bold"
                    : "nav-link text-muted"
                }
                href="#"
              >
                Register
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

/*
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          </form> 
*/
