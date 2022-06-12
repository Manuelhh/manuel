import s from "./Home.module.css";

export const Home = () => {
  return (
    <div className={s.homeCompContainer}>
      <div className={s.textContainer}>
        <h1 className={s.text}>Manuel H. Hinojosa</h1>
        <div className={s.title}>
          <div className={s.titleWrapper}>
            <div className={s.p}>Full Stack Developer</div>
            <div className={s.p}>Full Stack Developer</div>
            <div className={s.p}>Full Stack Developer</div>
            <div className={s.p}>Full Stack Developer</div>
            <div className={s.p}>Full Stack Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
