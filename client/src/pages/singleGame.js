import React from "react";

const SingleGame = (props) => {
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            CreatedBy
          </span>{" "}
          Game info
        </p>
        <div className="card-body">
          <p>Game Date</p>
          <p>Game Time</p>
          <p>Game Location</p>
          <p>Game Skill Level</p>
          <p>Game Players</p>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
