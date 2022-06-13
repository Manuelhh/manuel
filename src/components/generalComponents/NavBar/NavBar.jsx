// func
import { Link } from "react-router-dom";
// styles
import s from "./NavBar.module.css";
// images
import emailImg from "../../../images/contactBar/email.png";
import linkedInImg from "../../../images/contactBar/linkedin.png";
import cvImg from "../../../images/contactBar/cv.png";
import gitHubImg from "../../../images/contactBar/gitHub.webp";

const NavBar = (props) => {
  const handleNavBar = () => {
    props.navBarState.setShowNavBar(!props.navBarState.showNavBar);
  };

  return (
    <div className={s.navBarContainer}>
      <div className={s.moreContainer}>
        <p className={s.p} onClick={handleNavBar}>
          {props.navBarState.showNavBar ? "hide" : "more"}
        </p>
      </div>
      <div className={s.topNavBarContainer}>
        <div
          className={s.pageMenuContainer}
          style={props.navBarState.showNavBar ? {} : { display: "none" }}
        >
          <div>
            <Link className={s.link} to="/about">
              <div className={s.menuItemContainer}>about</div>
            </Link>
            <Link className={s.link} to="/skills">
              <div className={s.menuItemContainer}>skills</div>
            </Link>
          </div>

          <div className={s.projectsLinksContainer}>
            <div>
              <p>projects:</p>
            </div>
            <Link className={s.link} to="/one">
              <div className={s.menuItemContainer}>one</div>
            </Link>
            <Link className={s.link} to="/two">
              <div className={s.menuItemContainer}>two</div>
            </Link>
            <Link className={s.link} to="/three">
              <div className={s.menuItemContainer}>three</div>
            </Link>
            <Link className={s.link} to="/four">
              <div className={s.menuItemContainer}>four</div>
            </Link>
            <Link className={s.link} to="/five">
              <div className={s.menuItemContainer}>five</div>
            </Link>
            <Link className={s.link} to="/six">
              <div className={s.menuItemContainer}>six</div>
            </Link>
            <Link className={s.link} to="/seven">
              <div className={s.menuItemContainer}>seven</div>
            </Link>
            <Link className={s.link} to="/eight">
              <div className={s.menuItemContainer}>eight</div>
            </Link>
          </div>
          <div className={s.hamburgerMenuContainer}>
            <span className={s.hamburgerMenu}>menu</span>
          </div>
        </div>
      </div>

      <div
        className={s.contactMenuContainer}
        style={props.navBarState.showNavBar ? {} : { display: "none" }}
      >
        <div className={s.contactMenuItemContainer}>
          <Link to="/contact">
            <img src={emailImg} alt="email-icon" />
          </Link>
        </div>
        <div className={s.contactMenuItemContainer}>
          <a href="https://www.linkedin.com/in/manuelhh/">
            <img src={linkedInImg} alt="linkedIn-icon" />
          </a>
        </div>
        <div className={s.contactMenuItemContainer}>
          <a href="https://legendary-liger-9b5ac9.netlify.app">
            <img src={cvImg} alt="cv-icon" />
          </a>
        </div>
        <div className={s.contactMenuItemContainer}>
          <a href="https://github.com/Manuelhh">
            <img src={gitHubImg} alt="gitHub-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
