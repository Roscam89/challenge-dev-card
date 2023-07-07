import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "html+CSS",
    level: "beginner",
    color: "#2662EA",
  },

  {
    skill: "Javascript",
    level: "intermediate",
    color: "#EFDB810",
  },

  {
    skill: "AndroidStudio+Java",
    level: "advanced",
    color: "#C3DCAF",
  },

  {
    skill: "NodeJS + MongoDB",
    level: "beginner",
    color: "#E84F33",
  },

  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },

  {
    skill: "GitHub",
    level: "intermediate",
    color: "#EFD23F",
  },
];

function App() {
  return (
    <div className="container">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="passport photo (3).jpg" alt="dev avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1 className="dev-name">Maxim Rosca</h1>
      <p className="about">
        Beginer front-end software developer,learning new skills on Udemy.com .
        I like to play computer games,hang out with friends and travel. Also I
        enjoy studying programming.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skills">
      {skills.map((skillEl) => (
        <Skill skillObj={skillEl} key={skillEl.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  const className = skillObj.skill;
  const cssClassName = className.slice(0, 4).toLowerCase();
  return (
    <li
      className={`${cssClassName}`}
      style={{ backgroundColor: skillObj.color }}
    >
      {skillObj.skill}
      {skillObj.level === "beginner"
        ? "😊"
        : skillObj.level === "intermediate"
        ? "👍🏻"
        : "💪🏻"}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
