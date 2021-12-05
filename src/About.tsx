import React from "react";
import Helmet from "react-helmet";
import style from "./layout.module.css";

function About(): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>About | ほしかげ薬局</title>
        <meta name="description" content="ほしかげ薬局です！" />
        <html lang="ja" />
      </Helmet>
      <div className={style["general-container"]}>
        <h2 className={style["heading"]}>/About US</h2>
        <img
          src="test/logo2.png"
          width="400px"
          alt="ほしかげ薬局"
        />
        <p>
          毎日の退屈に効く創作処方します！同人サークルほしかげ薬局です。小説からイラスト、音楽まで幅広く取り扱っております。ただいま開店準備中…
        </p>
      </div>
    </div>
  );
}

export default About;
