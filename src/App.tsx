import React from "react";
import { Link, HashRouter as Router, Route, Switch } from "react-router-dom";
import style from "./layout.module.css";
import PrescriptionsData from "./prescriptiondata.json";
import About from "./About";
import Home from "./Home";
import { Prescription, Prescriptions } from "./Prescription";

function App(): JSX.Element {
  const pres = PrescriptionsData.prescriptions;
  return (
    <Router>
      <div className="App">
        <div className={style["container"]}>
          <h1 className={style["site-title"]}>ほしかげ薬局</h1>
          <nav>
            <ul className={style["nav-links"]}>
              <li className={style["nav-link-item"]}>
                <Link to="/" className={style["nav-link-text"]}>
                  Home
                </Link>
              </li>
              <li className={style["nav-link-item"]}>
                <Link to="/about" className={style["nav-link-text"]}>
                  About
                </Link>
              </li>
              <li className={style["nav-link-item"]}>
                <Link to="/prescription" className={style["nav-link-text"]}>
                  星の処方箋
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/prescription">
              <Prescriptions />
            </Route>
            <div>
              {pres.map((pre) => (
                <Route exact path={pre.path}>
                  <Prescription imgs={pre.imgs} title={pre.title} />
                </Route>
              ))}
            </div>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
