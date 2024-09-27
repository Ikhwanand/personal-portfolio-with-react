import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * A navigation bar component with a home button, skills button, projects button
 * and social media links. The component is responsive and has a scrolling effect.
 *
 * The component uses the useState hook to keep track of the current link and
 * the useEffect hook to add an event listener to the window's scroll event.
 *
 * The component renders a Navbar component from react-bootstrap with a
 * Container and a Nav component. The Nav component contains a Link component
 * for each of the home, skills and projects links. The component also renders
 * a social media icon and a button to connect with the user.
 *
 * @return {React.ReactElement} A React element representing the navigation bar
 * component.
 */
const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    /**
     * An event handler for the window's scroll event. The event handler is
     * responsible for setting the state of the component to indicate whether
     * the user has scrolled or not.
     *
     * @return {undefined} The function does not return a value.
     */
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * A function to update the active link state of the component.
   *
   * The function takes a string value, which is the name of the link to be
   * activated. The function sets the activeLink state with the value passed
   * to it.
   *
   * @param {string} value The name of the link to be activated.
   * @return {undefined} The function does not return a value.
   */
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expanded="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="icon1" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="icon2" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="icon3" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavbarComponent;
