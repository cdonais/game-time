import React from "react";
import githubIcon from "../../assets/github-logo.png";

const SocialLinks = () => {
  return (
    <footer className="w-100">
      <div className="container">
        <p className="copy col">&copy; 2022 Game Time</p>
        <div className="git-cont">
          <a href="https://github.com/cdonais/game-time">
            <img className="git" src={githubIcon} alt="github icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default SocialLinks;
