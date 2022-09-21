import React from "react";
import githubIcon from "../../assets/github-logo.png";

const SocialLinks = () => {
  return (
    <div className="w-100 bg-secondary p-4">
      <div className="container">
        <p className="copy col">&copy; 2022 Game Time</p>
        <div className="git-cont">
          <a href="https://github.com/cdonais/game-time">
            <img className="git" src={githubIcon} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SocialLinks;
