import React from "react";
import Helmet from "react-helmet";
import style from "./layout.module.css";

function Home(): JSX.Element {
  return (
    <div className={style["general-container"]}>
      <Helmet>
        <title>Home | ほしかげ薬局</title>
        <meta name="description" content="星の処方箋" />
        <html lang="ja" />
      </Helmet>
      <h2 className={style["heading"]}>/Home</h2>
      <img
        src="/prescription-for-the-stars-v2/test/logo.png"
        width="400px"
        alt="ほしかげ薬局"
      />
      <p>星の処方箋です！</p>
      <p>ここに素敵な文章を入れる</p>
      <p>ここに素敵な文章を入れる</p>
      <p>ここに素敵な文章を入れる</p>
    </div>
  );
}

export default Home;
