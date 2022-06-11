import s from "./Home.module.css";

export const Home = () => {
  return (
    <div className={s.homeCompContainer}>
      <div className={s.textContainer}>
        <h1 className={s.text}>Manuel H. Hinojosa</h1>
        <p className={s.p}>Full Stack Developer</p>
      </div>
    </div>
  );
};
