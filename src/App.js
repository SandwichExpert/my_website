import React, { useState } from "react";
import MainNavBar from "./components/MainNavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from './components/pages/Contact'
import "./styles.css";
import { Route, Switch } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState("");

  function getDarkMode() {
    if (isDark !== "dark") {
      setIsDark("dark");
    } else setIsDark("");
  }

  return (
    <div className={isDark === "dark" ? "container__dark" : "container__light"}>
      <div className="siwtchButton">
        <div className="icon">
          {isDark === "dark" ? (
            <>
              <i className="fas fa-sun"></i>
            </>
          ) : (
            <>
              <i className="fas fa-moon"></i>
            </>
          )}
        </div>
        <div>
          <label className="switch darkMode">
            <input type="checkbox" onClick={getDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <MainNavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  );
}

export default App;
