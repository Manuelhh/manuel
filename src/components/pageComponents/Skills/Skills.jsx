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
          <div className={s.skillContainer}>
            <div className={s.skillTitle}>tools</div>
            <div className={(s.skill, s.skillOne)}>npm</div>
            <div className={s.skill}>Terminal</div>
            <div className={s.skill}>git, gitHub</div>
            <div className={s.skill}>Heroku</div>
            <div className={s.skill}>Netlify</div>
            <div className={s.skill}>MongoDB</div>
            <div className={s.skill}>Mongoose</div>
          </div>
          <div className={s.skillContainer}>
            <div className={s.skillTitle}>languages</div>
            <div className={(s.skill, s.skillOne)}>html</div>
            <div className={s.skill}>css</div>
            <div className={s.skill}>js</div>
          </div>
          <div className={s.skillContainer}>
            <div className={s.skillTitle}>frameworks</div>
            <div className={(s.skill, s.skillOne)}>node js</div>
            <div className={s.skill}>express</div>
            <div className={s.skill}>react</div>
          </div>
          <div className={s.skillContainer}>
            <div className={s.skillTitle}>Knowledge</div>
            <div className={(s.skill, s.skillOne)}>mern</div>
            <div className={s.skill}>public api</div>
            <div className={s.skill}>host</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
