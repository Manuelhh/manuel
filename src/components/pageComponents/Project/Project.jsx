import s from "./Project.module.css";
import HomeButton from "../../generalComponents/HomeButton/HomeButton";

export const Project = (props) => {
  return (
    <div className={s.projectPageContainer}>
      <div className={s.top}>
        <HomeButton />
      </div>
      <div className={s.bottom}>
        <div className={s.projectContainer}>
          <div className={s.descriptionContainer}>
            <div className={s.textContainer}>
              <div className={s.title}>{props.project.title}</div>
              <div className={s.description}>{props.project.description}</div>
              <div className={s.tecnologies}>
                <div>{props.project.tecnologies[0]}</div>
                <div>{props.project.tecnologies[1]}</div>
                <div>{props.project.tecnologies[2]}</div>
                <div className={s.moreButton}>
                  <a className={s.moreButton} href={props.project.gitHubLink}>
                    {" "}
                    more info
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={s.projetImgContainer}>
            <a href={props.project.appLink}>
              <img src={props.project.img} alt="projectImg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
