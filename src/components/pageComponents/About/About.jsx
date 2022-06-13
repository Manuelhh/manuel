import s from "./About.module.css";
import aboutImg from "../../../images/aboutPage/aboutImg.png";
import HomeButton from "../../generalComponents/HomeButton/HomeButton";

const About = () => {
  return (
    <div className={s.aboutPageContainer}>
      <div className={s.top}>
        <HomeButton />
      </div>
      <div className={s.bottom}>
        <div className={s.aboutContainer}>
          <div className={s.aboutTextContainer}>
            <p>
              <span className={s.diploma}>
                General Assembly <br /> Software Engineer grad.
                <br />
                <sub> June to December 2021</sub>
              </span>
              <br />
              <br />
              <span>
                <sup className={s.location}>Toronto, ON. Canada.</sup>{" "}
              </span>
              <br />
              <br />I am passionate about programming and I have extensive
              knowledge of front-end techniques— and a flair for visual design.
              When I’m working on a project, I love structure, order and
              spending time with details for peak optimization. I’m especially
              in my element when I’m coming up with original solutions while
              collaborating with creative, talented and inspiring people.
            </p>
          </div>
          <div className={s.aboutImgContainer}>
            <img className={s.aboutImg} src={aboutImg} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
