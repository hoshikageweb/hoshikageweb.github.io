import React from "react";
import { Link } from "react-router-dom";
import style from "./layout.module.css";
import ComicViewer from "react-comic-viewer";
import PrescriptionsData from "./prescriptiondata.json";
import Helmet from "react-helmet";

export function Prescriptions(): JSX.Element {
  const pres = PrescriptionsData.prescriptions;
  return (
    <div className={style["general-container"]}>
      <Helmet>
        <title>星の処方箋 | ほしかげ薬局</title>
        <meta name="description" content="星の処方箋 | ほしかげ薬局" />
        <html lang="ja" />
      </Helmet>
      <h2 className={style["heading"]}>/処方箋一覧</h2>
      {pres.map((pre) => (
        <div>
          <Link to={pre.path}>{pre.title}</Link>
        </div>
      ))}
    </div>
  );
}

type PrescriptionProps = {
  imgs: Array<String>;
  title: String;
};

export const Prescription: React.FC<PrescriptionProps> = (props) => {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content="星の処方箋 | ほしかげ薬局" />
        <html lang="ja" />
      </Helmet>
      <ComicViewer pages={props.imgs} />
    </div>
  );
};
