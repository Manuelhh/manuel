// styles
import s from "./Skills.module.css";
// components
import HomeButton from "../../generalComponents/HomeButton/HomeButton";

const Skills = () => {
  return (
    <div className={s.skillsPageContainer}>
      <div className={s.top}>
        <HomeButton />
      </div>
      <div className={s.bottom}>
        <div className={s.skillsContainer}>
          <div className={s.skillsTitle}>skills</div>
          <div className={s.skillsList}>
            Npm, Terminal, Git, GitHub, Heroku, Netlify, MongoDB, Mongoose,
            HTML, CSS, JS, NodeJS, Express, React, MERN, Public API & Hosting.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
